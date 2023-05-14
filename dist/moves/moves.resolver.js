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
exports.MovesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const moves_service_1 = require("./moves.service");
const move_entity_1 = require("../entities/move.entity");
const create_move_input_1 = require("../DTOs/create-move.input");
let MovesResolver = class MovesResolver {
    constructor(movesService) {
        this.movesService = movesService;
    }
    createMove(createMoveInput) {
        return this.movesService.create(createMoveInput);
    }
    findAll() {
        return this.movesService.findAll();
    }
    findOne(move_id) {
        return this.movesService.findOne(move_id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => move_entity_1.Move),
    __param(0, (0, graphql_1.Args)('createMoveInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_move_input_1.CreateMoveInput]),
    __metadata("design:returntype", void 0)
], MovesResolver.prototype, "createMove", null);
__decorate([
    (0, graphql_1.Query)(() => [move_entity_1.Move], { name: 'getMoves' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => move_entity_1.Move, { name: 'getMove' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovesResolver.prototype, "findOne", null);
MovesResolver = __decorate([
    (0, graphql_1.Resolver)(() => move_entity_1.Move),
    __metadata("design:paramtypes", [moves_service_1.MovesService])
], MovesResolver);
exports.MovesResolver = MovesResolver;
//# sourceMappingURL=moves.resolver.js.map