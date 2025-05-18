import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { PlatoEntity } from './plato.entity';
import { PlatoService } from './plato.service';
import { faker } from '@faker-js/faker';

describe('PlatoService', () => {
  let service: PlatoService;
  let repository: Repository<PlatoEntity>;
  let platosList: PlatoEntity[] = [];

  const seedDatabase = async () => {
    await repository.clear();
    platosList = [];
    for (let i = 0; i < 5; i++) {
      const plato = await repository.save({
        nombre: faker.commerce.productName(),
        descripcion: faker.lorem.sentence(),
        precio: faker.number.int({ min: 10, max: 100 }),
        categoria: "entrada"
      });
      platosList.push(plato);
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [PlatoService],
    }).compile();

    service = module.get<PlatoService>(PlatoService);
    repository = module.get<Repository<PlatoEntity>>(getRepositoryToken(PlatoEntity));
    await seedDatabase();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all dishes', async () => {
    const platos = await service.findAll();
    expect(platos).not.toBeNull();
    expect(platos).toHaveLength(platosList.length);
  });

  it('findOne should return a dish by id', async () => {
    const stored = platosList[0];
    const found = await service.findOne(stored.id);
    expect(found).not.toBeNull();
    expect(found.nombre).toEqual(stored.nombre);
  });

  it('create should return a new dish', async () => {
    const plato = {
      id: "",
      nombre: "Nuevo plato",
      descripcion: "Delicioso",
      precio: 15,
      categoria: "plato fuerte"
    };
    const result = await service.create(plato);
    expect(result).not.toBeNull();

    const stored = await repository.findOne({ where: { id: result.id } });
    expect(stored).not.toBeNull();
    expect(stored!.nombre).toEqual(plato.nombre);
  });

  it('update should modify a dish', async () => {
    const plato = platosList[0];
    plato.nombre = "Actualizado";
    const result = await service.update(plato.id, plato);
    expect(result.nombre).toEqual("Actualizado");
  });

  it('delete should remove a dish', async () => {
    const plato = platosList[0];
    await service.delete(plato.id);
    const deleted = await repository.findOne({ where: { id: plato.id } });
    expect(deleted).toBeNull();
  });
});
