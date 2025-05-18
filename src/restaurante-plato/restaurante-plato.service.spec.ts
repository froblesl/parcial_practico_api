import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PlatoEntity } from '../plato/plato.entity';
import { RestaurantePlatoService } from './restaurante-plato.service';
import { faker } from '@faker-js/faker';

describe('RestaurantePlatoService', () => {
  let service: RestaurantePlatoService;
  let restauranteRepository: Repository<RestauranteEntity>;
  let platoRepository: Repository<PlatoEntity>;
  let restaurante: RestauranteEntity;
  let platosList: PlatoEntity[];

  const seedDatabase = async () => {
    await platoRepository.clear();
    await restauranteRepository.clear();

    platosList = [];
    for (let i = 0; i < 5; i++) {
      const plato = await platoRepository.save({
        nombre: faker.commerce.productName(),
        descripcion: faker.lorem.sentence(),
        precio: faker.number.int({ min: 10, max: 100 }),
        categoria: 'entrada',
      });
      platosList.push(plato);
    }

    restaurante = await restauranteRepository.save({
      nombre: faker.company.name(),
      direccion: faker.address.streetAddress(),
      cocina: 'Italiana',
      pagina_web: faker.internet.url(),
      platos: platosList,
    });
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [RestaurantePlatoService],
    }).compile();

    service = module.get<RestaurantePlatoService>(RestaurantePlatoService);
    restauranteRepository = module.get<Repository<RestauranteEntity>>(getRepositoryToken(RestauranteEntity));
    platoRepository = module.get<Repository<PlatoEntity>>(getRepositoryToken(PlatoEntity));
    await seedDatabase();
  });

  it('addDishToRestaurant should add a plato to a restaurante', async () => {
    const newPlato = await platoRepository.save({
      nombre: 'Plato X',
      descripcion: 'desc',
      precio: 25,
      categoria: 'entrada',
    });

    const newRestaurante = await restauranteRepository.save({
      nombre: 'Nuevo',
      direccion: 'x',
      cocina: 'Japonesa',
      pagina_web: 'http://x.com',
    });

    const result = await service.addDishToRestaurant(newRestaurante.id, newPlato.id);
    expect(result.platos.length).toBe(1);
    expect(result.platos[0].nombre).toBe(newPlato.nombre);
  });

  it('findDishFromRestaurant should return a plato from a restaurante', async () => {
    const plato = platosList[0];
    const result = await service.findDishFromRestaurant(restaurante.id, plato.id);
    expect(result).not.toBeNull();
    expect(result.nombre).toBe(plato.nombre);
  });

  it('findDishesFromRestaurant should return all platos from restaurante', async () => {
    const result = await service.findDishesFromRestaurant(restaurante.id);
    expect(result.length).toBe(platosList.length);
  });

  it('updateDishesFromRestaurant should update platos list for restaurante', async () => {
    const newPlato = await platoRepository.save({
      nombre: 'Actualizado',
      descripcion: 'nuevo',
      precio: 30,
      categoria: 'postre',
    });

    const result = await service.updateDishesFromRestaurant(restaurante.id, [newPlato.id]);
    expect(result.platos.length).toBe(1);
    expect(result.platos[0].nombre).toBe(newPlato.nombre);
  });

  it('deleteDishFromRestaurant should remove a plato from a restaurante', async () => {
    const plato = platosList[0];
    await service.deleteDishFromRestaurant(restaurante.id, plato.id);

    const updatedRestaurante = await restauranteRepository.findOne({
      where: { id: restaurante.id },
      relations: ['platos'],
    });
    const deleted = updatedRestaurante?.platos.find((p) => p.id === plato.id);
    expect(deleted).toBeUndefined();
  });
});
