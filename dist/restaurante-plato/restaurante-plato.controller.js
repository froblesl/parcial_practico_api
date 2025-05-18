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
exports.RestaurantePlatoController = void 0;
const common_1 = require("@nestjs/common");
const restaurante_plato_service_1 = require("./restaurante-plato.service");
let RestaurantePlatoController = class RestaurantePlatoController {
    restaurantePlatoService;
    constructor(restaurantePlatoService) {
        this.restaurantePlatoService = restaurantePlatoService;
    }
    async addDishToRestaurant(restauranteId, platoId) {
        return this.restaurantePlatoService.addDishToRestaurant(restauranteId, platoId);
    }
    async findDishesFromRestaurant(restauranteId) {
        return this.restaurantePlatoService.findDishesFromRestaurant(restauranteId);
    }
    async findDishFromRestaurant(restauranteId, platoId) {
        return this.restaurantePlatoService.findDishFromRestaurant(restauranteId, platoId);
    }
    async updateDishesFromRestaurant(restauranteId, platosIds) {
        return this.restaurantePlatoService.updateDishesFromRestaurant(restauranteId, platosIds);
    }
    async deleteDishFromRestaurant(restauranteId, platoId) {
        return this.restaurantePlatoService.deleteDishFromRestaurant(restauranteId, platoId);
    }
};
exports.RestaurantePlatoController = RestaurantePlatoController;
__decorate([
    (0, common_1.Post)(':platoId'),
    __param(0, (0, common_1.Param)('restauranteId')),
    __param(1, (0, common_1.Param)('platoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RestaurantePlatoController.prototype, "addDishToRestaurant", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('restauranteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantePlatoController.prototype, "findDishesFromRestaurant", null);
__decorate([
    (0, common_1.Get)(':platoId'),
    __param(0, (0, common_1.Param)('restauranteId')),
    __param(1, (0, common_1.Param)('platoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RestaurantePlatoController.prototype, "findDishFromRestaurant", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Param)('restauranteId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], RestaurantePlatoController.prototype, "updateDishesFromRestaurant", null);
__decorate([
    (0, common_1.Delete)(':platoId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('restauranteId')),
    __param(1, (0, common_1.Param)('platoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RestaurantePlatoController.prototype, "deleteDishFromRestaurant", null);
exports.RestaurantePlatoController = RestaurantePlatoController = __decorate([
    (0, common_1.Controller)('restaurants/:restauranteId/dishes'),
    __metadata("design:paramtypes", [restaurante_plato_service_1.RestaurantePlatoService])
], RestaurantePlatoController);
//# sourceMappingURL=restaurante-plato.controller.js.map