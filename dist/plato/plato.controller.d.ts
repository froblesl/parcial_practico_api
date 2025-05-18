import { PlatoService } from './plato.service';
import { PlatoEntity } from './plato.entity';
export declare class PlatoController {
    private readonly platoService;
    constructor(platoService: PlatoService);
    findAll(): Promise<PlatoEntity[]>;
    findOne(id: string): Promise<PlatoEntity>;
    create(platoData: Partial<PlatoEntity>): Promise<PlatoEntity>;
    update(id: string, platoData: Partial<PlatoEntity>): Promise<PlatoEntity>;
    delete(id: string): Promise<void>;
}
