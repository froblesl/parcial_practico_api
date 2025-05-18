import { PlatoEntity } from '../plato/plato.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestauranteEntity {
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

  @ManyToMany(() => PlatoEntity, plato => plato.restaurantes, {
    cascade: true,
  })
  @JoinTable()
  platos: PlatoEntity[];
}
