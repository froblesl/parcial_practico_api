"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestauranteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const restaurante_entity_1 = require("./restaurante.entity");
const plato_entity_1 = require("../plato/plato.entity");
const restaurante_service_1 = require("./restaurante.service");
const plato_module_1 = require("../plato/plato.module");
const restaurante_controller_1 = require("./restaurante.controller");
let RestauranteModule = class RestauranteModule {
};
exports.RestauranteModule = RestauranteModule;
exports.RestauranteModule = RestauranteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([restaurante_entity_1.RestauranteEntity, plato_entity_1.PlatoEntity]),
            (0, common_1.forwardRef)(() => plato_module_1.PlatoModule)
        ],
        controllers: [restaurante_controller_1.RestauranteController],
        providers: [restaurante_service_1.RestauranteService],
        exports: [typeorm_1.TypeOrmModule, restaurante_service_1.RestauranteService]
    })
], RestauranteModule);
//# sourceMappingURL=restaurante.module.js.map