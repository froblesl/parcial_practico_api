import { Repository } from 'typeorm';
import { RestauranteEntity } from './restaurante.entity';
export declare class RestauranteService {
    private readonly restauranteRepository;
    constructor(restauranteRepository: Repository<RestauranteEntity>);
    private readonly tiposDeCocina;
    private validarTipoCocina;
    findAll(): Promise<RestauranteEntity[]>;
    findOne(id: string): Promise<RestauranteEntity>;
    create(restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity>;
    update(id: string, restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity>;
    delete(id: string): Promise<void>;
}
