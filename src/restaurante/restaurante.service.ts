import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestauranteEntity } from './restaurante.entity';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(RestauranteEntity)
    private readonly restauranteRepository: Repository<RestauranteEntity>,
  ) {}

  private readonly tiposDeCocina = [
    'Italiana',
    'Japonesa',
    'Mexicana',
    'Colombiana',
    'India',
    'Internacional',
  ];

  private validarTipoCocina(cocina: string) {
    if (!this.tiposDeCocina.includes(cocina)) {
      throw new BadRequestException(
        `Tipo de cocina inválido. Debe ser uno de: ${this.tiposDeCocina.join(', ')}.`
      );
    }
  }

  async findAll(): Promise<RestauranteEntity[]> {
    return this.restauranteRepository.find({ relations: ['platos'] });
  }

  async findOne(id: string): Promise<RestauranteEntity> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { id },
      relations: ['platos'],
    });
    if (!restaurante) {
      throw new NotFoundException(`Restaurante con id ${id} no encontrado`);
    }
    return restaurante;
  }

  async create(restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity> {
    this.validarTipoCocina(restauranteData.cocina!);
    const restaurante = this.restauranteRepository.create(restauranteData);
    return this.restauranteRepository.save(restaurante);
  }

  async update(id: string, restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity> {
    const restaurante = await this.findOne(id);
    if (restauranteData.cocina) {
      this.validarTipoCocina(restauranteData.cocina);
    }
    Object.assign(restaurante, restauranteData);
    return this.restauranteRepository.save(restaurante);
  }

  async delete(id: string): Promise<void> {
    const restaurante = await this.findOne(id);
    await this.restauranteRepository.remove(restaurante);
  }
}
