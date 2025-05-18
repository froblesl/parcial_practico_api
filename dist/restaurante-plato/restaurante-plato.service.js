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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantePlatoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const restaurante_entity_1 = require("../restaurante/restaurante.entity");
const plato_entity_1 = require("../plato/plato.entity");
const typeorm_2 = require("typeorm");
let RestaurantePlatoService = class RestaurantePlatoService {
    restauranteRepository;
    platoRepository;
    constructor(restauranteRepository, platoRepository) {
        this.restauranteRepository = restauranteRepository;
        this.platoRepository = platoRepository;
    }
    async addDishToRestaurant(restauranteId, platoId) {
        const restaurante = await this.restauranteRepository.findOne({
            where: { id: restauranteId },
            relations: ['platos'],
        });
        if (!restaurante)
            throw new common_1.NotFoundException('Restaurante no encontrado');
        const plato = await this.platoRepository.findOneBy({ id: platoId });
        if (!plato)
            throw new common_1.NotFoundException('Plato no encontrado');
        restaurante.platos.push(plato);
        return this.restauranteRepository.save(restaurante);
    }
    async findDishesFromRestaurant(restauranteId) {
        const restaurante = await this.restauranteRepository.findOne({
            where: { id: restauranteId },
            relations: ['platos'],
        });
        if (!restaurante)
            throw new common_1.NotFoundException('Restaurante no encontrado');
        return restaurante.platos;
    }
    async findDishFromRestaurant(restauranteId, platoId) {
        const platos = await this.findDishesFromRestaurant(restauranteId);
        const plato = platos.find((p) => p.id === platoId);
        if (!plato)
            throw new common_1.NotFoundException('Plato no asociado al restaurante');
        return plato;
    }
    async updateDishesFromRestaurant(restauranteId, platosIds) {
        const restaurante = await this.restauranteRepository.findOne({
            where: { id: restauranteId },
            relations: ['platos'],
        });
        if (!restaurante)
            throw new common_1.NotFoundException('Restaurante no encontrado');
        const platos = [];
        for (const id of platosIds) {
            const plato = await this.platoRepository.findOneBy({ id });
            if (!plato)
                throw new common_1.NotFoundException(`Plato con id ${id} no encontrado`);
            platos.push(plato);
        }
        restaurante.platos = platos;
        return this.restauranteRepository.save(restaurante);
    }
    async deleteDishFromRestaurant(restauranteId, platoId) {
        const restaurante = await this.restauranteRepository.findOne({
            where: { id: restauranteId },
            relations: ['platos'],
        });
        if (!restaurante)
            throw new common_1.NotFoundException('Restaurante no encontrado');
        restaurante.platos = restaurante.platos.filter((p) => p.id !== platoId);
        await this.restauranteRepository.save(restaurante);
    }
};
exports.RestaurantePlatoService = RestaurantePlatoService;
exports.RestaurantePlatoService = RestaurantePlatoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurante_entity_1.RestauranteEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(plato_entity_1.PlatoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RestaurantePlatoService);
//# sourceMappingURL=restaurante-plato.service.js.map