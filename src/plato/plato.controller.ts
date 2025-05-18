import {Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { PlatoService } from './plato.service';
import { PlatoEntity } from './plato.entity';

@Controller('dishes')
export class PlatoController {
  constructor(private readonly platoService: PlatoService) {}

  // GET /dishes
  @Get()
  async findAll(): Promise<PlatoEntity[]> {
    return this.platoService.findAll();
  }

  // GET /dishes/:id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PlatoEntity> {
    return this.platoService.findOne(id);
  }

  // POST /dishes
  @Post()
  async create(@Body() platoData: Partial<PlatoEntity>): Promise<PlatoEntity> {
    return this.platoService.create(platoData);
  }

  // PUT /dishes/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() platoData: Partial<PlatoEntity>,
  ): Promise<PlatoEntity> {
    return this.platoService.update(id, platoData);
  }

  // DELETE /dishes/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return this.platoService.delete(id);
  }
}
