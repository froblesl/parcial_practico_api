import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PlatoModule } from './plato/plato.module';
import { RestauranteEntity } from './restaurante/restaurante.entity';
import { PlatoEntity } from './plato/plato.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'museum',
      entities: [RestauranteEntity, PlatoEntity],
      dropSchema: true,
      synchronize: true
    }),
    RestauranteModule,
    PlatoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
