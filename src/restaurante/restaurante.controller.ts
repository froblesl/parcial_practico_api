import {Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { RestauranteEntity } from './restaurante.entity';

@Controller('restaurants')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  // GET /restaurants
  @Get()
  async findAll(): Promise<RestauranteEntity[]> {
    return this.restauranteService.findAll();
  }

  // GET /restaurants/:id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RestauranteEntity> {
    return this.restauranteService.findOne(id);
  }

  // POST /restaurants
  @Post()
  async create(@Body() restauranteData: Partial<RestauranteEntity>): Promise<RestauranteEntity> {
    return this.restauranteService.create(restauranteData);
  }

  // PUT /restaurants/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() restauranteData: Partial<RestauranteEntity>,
  ): Promise<RestauranteEntity> {
    return this.restauranteService.update(id, restauranteData);
  }

  // DELETE /restaurants/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return this.restauranteService.delete(id);
  }
}
