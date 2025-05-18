import { RestaurantePlatoService } from './restaurante-plato.service';
import { PlatoEntity } from '../plato/plato.entity';
export declare class RestaurantePlatoController {
    private readonly restaurantePlatoService;
    constructor(restaurantePlatoService: RestaurantePlatoService);
    addDishToRestaurant(restauranteId: string, platoId: string): Promise<import("../restaurante/restaurante.entity").RestauranteEntity>;
    findDishesFromRestaurant(restauranteId: string): Promise<PlatoEntity[]>;
    findDishFromRestaurant(restauranteId: string, platoId: string): Promise<PlatoEntity>;
    updateDishesFromRestaurant(restauranteId: string, platosIds: string[]): Promise<import("../restaurante/restaurante.entity").RestauranteEntity>;
    deleteDishFromRestaurant(restauranteId: string, platoId: string): Promise<void>;
}
