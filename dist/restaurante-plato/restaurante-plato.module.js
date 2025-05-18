"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantePlatoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
const plato_entity_1 = require("../plato/plato.entity");
const restaurante_plato_service_1 = require("./restaurante-plato.service");
const restaurante_plato_controller_1 = require("./restaurante-plato.controller");
let RestaurantePlatoModule = class RestaurantePlatoModule {
};
exports.RestaurantePlatoModule = RestaurantePlatoModule;
exports.RestaurantePlatoModule = RestaurantePlatoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurante_entity_1.RestauranteEntity, plato_entity_1.PlatoEntity])],
        providers: [restaurante_plato_service_1.RestaurantePlatoService],
        controllers: [restaurante_plato_controller_1.RestaurantePlatoController],
    })
], RestaurantePlatoModule);
//# sourceMappingURL=restaurante-plato.module.js.map