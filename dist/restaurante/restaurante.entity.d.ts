import { PlatoEntity } from '../plato/plato.entity';
export declare class RestauranteEntity {
    id: string;
    nombre: string;
    direccion: string;
    cocina: string;
    pagina_web: string;
    platos: PlatoEntity[];
}
