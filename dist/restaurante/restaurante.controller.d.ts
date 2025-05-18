import { RestauranteService } from './restaurante.service';
import { RestauranteEntity } from './restaurante.entity';
export declare class RestauranteController {
    private readonly restauranteService;
    constructor(restauranteService: RestauranteService);
    findAll(): Promise<RestauranteEntity[]>;
    findOne(id: string): Promise<RestauranteEntity>;
    create(restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity>;
    update(id: string, restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity>;
    delete(id: string): Promise<void>;
}
