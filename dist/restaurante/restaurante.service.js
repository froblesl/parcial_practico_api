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
exports.RestauranteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const restaurante_entity_1 = require("./restaurante.entity");
let RestauranteService = class RestauranteService {
    restauranteRepository;
    constructor(restauranteRepository) {
        this.restauranteRepository = restauranteRepository;
    }
    tiposDeCocina = [
        'Italiana',
        'Japonesa',
        'Mexicana',
        'Colombiana',
        'India',
        'Internacional',
    ];
    validarTipoCocina(cocina) {
        if (!this.tiposDeCocina.includes(cocina)) {
            throw new common_1.BadRequestException(`Tipo de cocina inválido. Debe ser uno de: ${this.tiposDeCocina.join(', ')}.`);
        }
    }
    async findAll() {
        return this.restauranteRepository.find({ relations: ['platos'] });
    }
    async findOne(id) {
        const restaurante = await this.restauranteRepository.findOne({
            where: { id },
            relations: ['platos'],
        });
        if (!restaurante) {
            throw new common_1.NotFoundException(`Restaurante con id ${id} no encontrado`);
        }
        return restaurante;
    }
    async create(restauranteData) {
        this.validarTipoCocina(restauranteData.cocina);
        const restaurante = this.restauranteRepository.create(restauranteData);
        return this.restauranteRepository.save(restaurante);
    }
    async update(id, restauranteData) {
        const restaurante = await this.findOne(id);
        if (restauranteData.cocina) {
            this.validarTipoCocina(restauranteData.cocina);
        }
        Object.assign(restaurante, restauranteData);
        return this.restauranteRepository.save(restaurante);
    }
    async delete(id) {
        const restaurante = await this.findOne(id);
        await this.restauranteRepository.remove(restaurante);
    }
};
exports.RestauranteService = RestauranteService;
exports.RestauranteService = RestauranteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurante_entity_1.RestauranteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestauranteService);
//# sourceMappingURL=restaurante.service.js.map