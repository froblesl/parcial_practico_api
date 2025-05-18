import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
export declare class PlatoEntity {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    restaurantes: RestauranteEntity[];
}
