
import { PlatoEntity } from '../plato/plato.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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

   @ManyToMany(() => PlatoEntity, plato => plato.movements)
   @JoinTable()
   artists: PlatoEntity[];

}