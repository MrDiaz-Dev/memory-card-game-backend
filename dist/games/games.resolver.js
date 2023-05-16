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
exports.GamesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const games_service_1 = require("./games.service");
const graphql_2 = require("@nestjs/graphql");
const game_entity_1 = require("../entities/game.entity");
const create_game_input_1 = require("../DTOs/create-game.input");
const move_entity_1 = require("../entities/move.entity");
let GamesResolver = class GamesResolver {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    getGames() {
        return this.gamesService.findAll();
    }
    getGameByID(game_id) {
        return this.gamesService.findOne(game_id);
    }
    createGame(gameInput) {
        return this.gamesService.createGame(gameInput);
    }
    updateGamePoints(game_id, player_n) {
        return this.gamesService.updateGamePoints(game_id, player_n);
    }
    getMoves(game) {
        return this.gamesService.getMoves(game.game_id);
    }
};
__decorate([
    (0, graphql_2.Query)((returns) => [game_entity_1.Game]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamesResolver.prototype, "getGames", null);
__decorate([
    (0, graphql_2.Query)((returns) => game_entity_1.Game),
    __param(0, (0, graphql_1.Args)('game_id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GamesResolver.prototype, "getGameByID", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => game_entity_1.Game),
    __param(0, (0, graphql_1.Args)('gameInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_input_1.CreateGameInput]),
    __metadata("design:returntype", void 0)
], GamesResolver.prototype, "createGame", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => game_entity_1.Game),
    __param(0, (0, graphql_1.Args)('game_id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('player_n', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GamesResolver.prototype, "updateGamePoints", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => [move_entity_1.Move]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_entity_1.Game]),
    __metadata("design:returntype", Promise)
], GamesResolver.prototype, "getMoves", null);
GamesResolver = __decorate([
    (0, graphql_1.Resolver)((of) => game_entity_1.Game),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesResolver);
exports.GamesResolver = GamesResolver;
//# sourceMappingURL=games.resolver.js.map