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
exports.PlatoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const plato_entity_1 = require("./plato.entity");
let PlatoService = class PlatoService {
    platoRepository;
    constructor(platoRepository) {
        this.platoRepository = platoRepository;
    }
    categoriasValidas = [
        'entrada',
        'plato fuerte',
        'postre',
        'bebida',
    ];
    validarCategoria(categoria) {
        if (!this.categoriasValidas.includes(categoria.toLowerCase())) {
            throw new common_1.BadRequestException(`Categoría inválida. Debe ser una de: ${this.categoriasValidas.join(', ')}.`);
        }
    }
    validarPrecio(precio) {
        if (typeof precio !== 'number' || precio <= 0) {
            throw new common_1.BadRequestException('El precio debe ser un número positivo.');
        }
    }
    async findAll() {
        return this.platoRepository.find({ relations: ['restaurantes'] });
    }
    async findOne(id) {
        const plato = await this.platoRepository.findOne({
            where: { id },
            relations: ['restaurantes'],
        });
        if (!plato) {
            throw new common_1.NotFoundException(`Plato con id ${id} no encontrado`);
        }
        return plato;
    }
    async create(platoData) {
        this.validarCategoria(platoData.categoria);
        this.validarPrecio(platoData.precio);
        const plato = this.platoRepository.create(platoData);
        return this.platoRepository.save(plato);
    }
    async update(id, platoData) {
        const plato = await this.findOne(id);
        if (platoData.categoria) {
            this.validarCategoria(platoData.categoria);
        }
        if (platoData.precio !== undefined) {
            this.validarPrecio(platoData.precio);
        }
        Object.assign(plato, platoData);
        return this.platoRepository.save(plato);
    }
    async delete(id) {
        const plato = await this.findOne(id);
        await this.platoRepository.remove(plato);
    }
};
exports.PlatoService = PlatoService;
exports.PlatoService = PlatoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plato_entity_1.PlatoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlatoService);
//# sourceMappingURL=plato.service.js.map