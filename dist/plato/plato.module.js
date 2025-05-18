"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const plato_entity_1 = require("./plato.entity");
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
const restaurante_module_1 = require("../restaurante/restaurante.module");
const plato_service_1 = require("./plato.service");
const plato_controller_1 = require("./plato.controller");
let PlatoModule = class PlatoModule {
};
exports.PlatoModule = PlatoModule;
exports.PlatoModule = PlatoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([plato_entity_1.PlatoEntity, restaurante_entity_1.RestauranteEntity]),
            (0, common_1.forwardRef)(() => restaurante_module_1.RestauranteModule)
        ],
        controllers: [plato_controller_1.PlatoController],
        providers: [plato_service_1.PlatoService],
        exports: [typeorm_1.TypeOrmModule, plato_service_1.PlatoService]
    })
], PlatoModule);
//# sourceMappingURL=plato.module.js.map