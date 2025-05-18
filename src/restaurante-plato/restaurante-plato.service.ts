import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PlatoEntity } from '../plato/plato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantePlatoService {
  constructor(
    @InjectRepository(RestauranteEntity)
    private readonly restauranteRepository: Repository<RestauranteEntity>,

    @InjectRepository(PlatoEntity)
    private readonly platoRepository: Repository<PlatoEntity>,
  ) {}

  async addDishToRestaurant(
    restauranteId: string,
    platoId: string,
  ): Promise<RestauranteEntity> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { id: restauranteId },
      relations: ['platos'],
    });
    if (!restaurante) throw new NotFoundException('Restaurante no encontrado');

    const plato = await this.platoRepository.findOneBy({ id: platoId });
    if (!plato) throw new NotFoundException('Plato no encontrado');

    restaurante.platos.push(plato);
    return this.restauranteRepository.save(restaurante);
  }

  async findDishesFromRestaurant(restauranteId: string): Promise<PlatoEntity[]> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { id: restauranteId },
      relations: ['platos'],
    });
    if (!restaurante) throw new NotFoundException('Restaurante no encontrado');
    return restaurante.platos;
  }

  async findDishFromRestaurant(
    restauranteId: string,
    platoId: string,
  ): Promise<PlatoEntity> {
    const platos = await this.findDishesFromRestaurant(restauranteId);
    const plato = platos.find((p) => p.id === platoId);
    if (!plato) throw new NotFoundException('Plato no asociado al restaurante');
    return plato;
  }

  async updateDishesFromRestaurant(
    restauranteId: string,
    platosIds: string[],
  ): Promise<RestauranteEntity> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { id: restauranteId },
      relations: ['platos'],
    });
    if (!restaurante) throw new NotFoundException('Restaurante no encontrado');

    const platos: PlatoEntity[] = [];
    for (const id of platosIds) {
      const plato = await this.platoRepository.findOneBy({ id });
      if (!plato) throw new NotFoundException(`Plato con id ${id} no encontrado`);
      platos.push(plato);
    }

    restaurante.platos = platos;
    return this.restauranteRepository.save(restaurante);
  }

  async deleteDishFromRestaurant(
    restauranteId: string,
    platoId: string,
  ): Promise<void> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { id: restauranteId },
      relations: ['platos'],
    });
    if (!restaurante) throw new NotFoundException('Restaurante no encontrado');

    restaurante.platos = restaurante.platos.filter((p) => p.id !== platoId);
    await this.restauranteRepository.save(restaurante);
  }
}
