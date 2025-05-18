import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteService } from './restaurante.service';
import { faker } from '@faker-js/faker';

describe('RestauranteService', () => {
  let service: RestauranteService;
  let repository: Repository<RestauranteEntity>;
  let restaurantesList: RestauranteEntity[] = [];

  const seedDatabase = async () => {
    await repository.clear();
    restaurantesList = [];
    for (let i = 0; i < 5; i++) {
      const restaurante = await repository.save({
        nombre: faker.company.name(),
        direccion: faker.address.streetAddress(),
        cocina: "Italiana",
        pagina_web: faker.internet.url(),
      });
      restaurantesList.push(restaurante);
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [RestauranteService],
    }).compile();

    service = module.get<RestauranteService>(RestauranteService);
    repository = module.get<Repository<RestauranteEntity>>(getRepositoryToken(RestauranteEntity));
    await seedDatabase();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all restaurants', async () => {
    const restaurantes = await service.findAll();
    expect(restaurantes).not.toBeNull();
    expect(restaurantes).toHaveLength(restaurantesList.length);
  });

  it('findOne should return a restaurant by id', async () => {
    const stored = restaurantesList[0];
    const found = await service.findOne(stored.id);
    expect(found).not.toBeNull();
    expect(found.nombre).toEqual(stored.nombre);
  });

  it('create should return a new restaurant', async () => {
    const restaurante = {
      id: "",
      nombre: faker.company.name(),
      direccion: faker.address.streetAddress(),
      cocina: "India",
      pagina_web: faker.internet.url()
    };
    const result = await service.create(restaurante);
    expect(result).not.toBeNull();

    const stored = await repository.findOne({ where: { id: result.id } });
    expect(stored).not.toBeNull();
    expect(stored!.nombre).toEqual(restaurante.nombre);
  });

  it('update should modify a restaurant', async () => {
    const restaurante = restaurantesList[0];
    restaurante.nombre = "Nuevo Nombre";
    const result = await service.update(restaurante.id, restaurante);
    expect(result.nombre).toEqual("Nuevo Nombre");
  });

  it('delete should remove a restaurant', async () => {
    const restaurante = restaurantesList[0];
    await service.delete(restaurante.id);
    const deleted = await repository.findOne({ where: { id: restaurante.id } });
    expect(deleted).toBeNull();
  });
});
