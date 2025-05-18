"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoEntity = void 0;
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
const typeorm_1 = require("typeorm");
let PlatoEntity = class PlatoEntity {
    id;
    nombre;
    descripcion;
    precio;
    categoria;
    restaurantes;
};
exports.PlatoEntity = PlatoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlatoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlatoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlatoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], PlatoEntity.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlatoEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => restaurante_entity_1.RestauranteEntity, restaurante => restaurante.platos),
    __metadata("design:type", Array)
], PlatoEntity.prototype, "restaurantes", void 0);
exports.PlatoEntity = PlatoEntity = __decorate([
    (0, typeorm_1.Entity)()
], PlatoEntity);
//# sourceMappingURL=plato.entity.js.map