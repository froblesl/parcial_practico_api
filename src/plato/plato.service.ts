import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlatoEntity } from './plato.entity';

@Injectable()
export class PlatoService {
  constructor(
    @InjectRepository(PlatoEntity)
    private readonly platoRepository: Repository<PlatoEntity>,
  ) {}

  private readonly categoriasValidas = [
    'entrada',
    'plato fuerte',
    'postre',
    'bebida',
  ];

  private validarCategoria(categoria: string) {
    if (!this.categoriasValidas.includes(categoria.toLowerCase())) {
      throw new BadRequestException(
        `Categoría inválida. Debe ser una de: ${this.categoriasValidas.join(', ')}.`
      );
    }
  }

  private validarPrecio(precio: number) {
    if (typeof precio !== 'number' || precio <= 0) {
      throw new BadRequestException('El precio debe ser un número positivo.');
    }
  }

  async findAll(): Promise<PlatoEntity[]> {
    return this.platoRepository.find({ relations: ['restaurantes'] });
  }

  async findOne(id: string): Promise<PlatoEntity> {
    const plato = await this.platoRepository.findOne({
      where: { id },
      relations: ['restaurantes'],
    });
    if (!plato) {
      throw new NotFoundException(`Plato con id ${id} no encontrado`);
    }
    return plato;
  }

  async create(platoData: Partial<PlatoEntity>): Promise<PlatoEntity> {
    this.validarCategoria(platoData.categoria!);
    this.validarPrecio(platoData.precio!);
    const plato = this.platoRepository.create(platoData);
    return this.platoRepository.save(plato);
  }

  async update(id: string, platoData: Partial<PlatoEntity>): Promise<PlatoEntity> {
    const plato = await this.findOne(id);

    if (platoData.categoria) {
      this.validarCategoria(platoData.categoria);
    }
    if (platoData.precio !== undefined) {
      this.validarPrecio(platoData.precio);
    }

    Object.assign(plato, platoData);
    return this.platoRepository.save(plato);
  }

  async delete(id: string): Promise<void> {
    const plato = await this.findOne(id);
    await this.platoRepository.remove(plato);
  }
}
