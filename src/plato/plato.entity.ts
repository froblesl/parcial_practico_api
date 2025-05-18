
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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
   artist: PlatoEntity[];

}