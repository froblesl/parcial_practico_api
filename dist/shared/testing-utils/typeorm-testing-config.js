"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const restaurante_entity_1 = require("../../restaurante/restaurante.entity");
const plato_entity_1 = require("../../plato/plato.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [restaurante_entity_1.RestauranteEntity, plato_entity_1.PlatoEntity],
        synchronize: true,
    }),
    typeorm_1.TypeOrmModule.forFeature([restaurante_entity_1.RestauranteEntity, plato_entity_1.PlatoEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=typeorm-testing-config.js.map