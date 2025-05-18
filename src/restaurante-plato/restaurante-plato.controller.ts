import {Controller, Param, Post, Get, Put, Delete, Body, HttpCode, HttpStatus,} from '@nestjs/common';
import { RestaurantePlatoService } from './restaurante-plato.service';
import { PlatoEntity } from '../plato/plato.entity';

@Controller('restaurants/:restauranteId/dishes')
export class RestaurantePlatoController {
  constructor(private readonly restaurantePlatoService: RestaurantePlatoService) {}

  @Post(':platoId')
  async addDishToRestaurant(
    @Param('restauranteId') restauranteId: string,
    @Param('platoId') platoId: string,
  ) {
    return this.restaurantePlatoService.addDishToRestaurant(restauranteId, platoId);
  }

  @Get()
  async findDishesFromRestaurant(
    @Param('restauranteId') restauranteId: string,
  ): Promise<PlatoEntity[]> {
    return this.restaurantePlatoService.findDishesFromRestaurant(restauranteId);
  }

  @Get(':platoId')
  async findDishFromRestaurant(
    @Param('restauranteId') restauranteId: string,
    @Param('platoId') platoId: string,
  ): Promise<PlatoEntity> {
    return this.restaurantePlatoService.findDishFromRestaurant(restauranteId, platoId);
  }

  @Put()
  async updateDishesFromRestaurant(
    @Param('restauranteId') restauranteId: string,
    @Body() platosIds: string[],
  ) {
    return this.restaurantePlatoService.updateDishesFromRestaurant(restauranteId, platosIds);
  }

  @Delete(':platoId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteDishFromRestaurant(
    @Param('restauranteId') restauranteId: string,
    @Param('platoId') platoId: string,
  ) {
    return this.restaurantePlatoService.deleteDishFromRestaurant(restauranteId, platoId);
  }
}
