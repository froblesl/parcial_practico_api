import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEntity } from './restaurante.entity';
import { PlatoEntity } from '../plato/plato.entity';
import { RestauranteService } from './restaurante.service';
import { PlatoModule } from '../plato/plato.module';
import { RestauranteController } from './restaurante.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([RestauranteEntity, PlatoEntity]),
    forwardRef(() => PlatoModule)
  ],
  controllers: [RestauranteController],
  providers: [RestauranteService],
  exports: [TypeOrmModule, RestauranteService]
})
export class RestauranteModule {}
