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
exports.GamesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const games_service_1 = require("./games.service");
const graphql_2 = require("@nestjs/graphql");
const game_entity_1 = require("./entitys/game.entity");
let GamesResolver = class GamesResolver {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    getGames() {
        return this.gamesService.findAll();
    }
};
__decorate([
    (0, graphql_2.Query)((returns) => [game_entity_1.Game]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamesResolver.prototype, "getGames", null);
GamesResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesResolver);
exports.GamesResolver = GamesResolver;
//# sourceMappingURL=games.resolver.js.map