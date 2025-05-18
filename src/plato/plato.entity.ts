import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlatoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  cocina: string;

  @Column()
  pagina_web: string;

  @ManyToMany(() => RestauranteEntity, restaurante => restaurante.platos)
  restaurantes: RestauranteEntity[];
}
