import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PlatoEntity } from '../plato/plato.entity';
import { Repository } from 'typeorm';
export declare class RestaurantePlatoService {
    private readonly restauranteRepository;
    private readonly platoRepository;
    constructor(restauranteRepository: Repository<RestauranteEntity>, platoRepository: Repository<PlatoEntity>);
    addDishToRestaurant(restauranteId: string, platoId: string): Promise<RestauranteEntity>;
    findDishesFromRestaurant(restauranteId: string): Promise<PlatoEntity[]>;
    findDishFromRestaurant(restauranteId: string, platoId: string): Promise<PlatoEntity>;
    updateDishesFromRestaurant(restauranteId: string, platosIds: string[]): Promise<RestauranteEntity>;
    deleteDishFromRestaurant(restauranteId: string, platoId: string): Promise<void>;
}
