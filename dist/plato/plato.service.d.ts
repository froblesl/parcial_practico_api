import { Repository } from 'typeorm';
import { PlatoEntity } from './plato.entity';
export declare class PlatoService {
    private readonly platoRepository;
    constructor(platoRepository: Repository<PlatoEntity>);
    private readonly categoriasValidas;
    private validarCategoria;
    private validarPrecio;
    findAll(): Promise<PlatoEntity[]>;
    findOne(id: string): Promise<PlatoEntity>;
    create(platoData: Partial<PlatoEntity>): Promise<PlatoEntity>;
    update(id: string, platoData: Partial<PlatoEntity>): Promise<PlatoEntity>;
    delete(id: string): Promise<void>;
}
