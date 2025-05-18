import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatoEntity } from './plato.entity';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { RestauranteModule } from '../restaurante/restaurante.module';
import { PlatoService } from './plato.service';
import { PlatoController } from './plato.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlatoEntity, RestauranteEntity]),
    forwardRef(() => RestauranteModule)
  ],
  controllers: [PlatoController],
  providers: [PlatoService],
  exports: [TypeOrmModule, PlatoService]
})
export class PlatoModule {}
