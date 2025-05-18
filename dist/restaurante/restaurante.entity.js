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
exports.RestauranteEntity = void 0;
const plato_entity_1 = require("../plato/plato.entity");
const typeorm_1 = require("typeorm");
let RestauranteEntity = class RestauranteEntity {
    id;
    nombre;
    direccion;
    cocina;
    pagina_web;
    platos;
};
exports.RestauranteEntity = RestauranteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "cocina", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestauranteEntity.prototype, "pagina_web", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => plato_entity_1.PlatoEntity, plato => plato.restaurantes, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], RestauranteEntity.prototype, "platos", void 0);
exports.RestauranteEntity = RestauranteEntity = __decorate([
    (0, typeorm_1.Entity)()
], RestauranteEntity);
//# sourceMappingURL=restaurante.entity.js.map