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
exports.Move = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const game_entity_1 = require("./game.entity");
let Move = class Move {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Move.prototype, "move_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Move.prototype, "game_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Move.prototype, "turn", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Move.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Move.prototype, "card_number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game, Game => Game.Moves),
    (0, graphql_1.Field)(() => game_entity_1.Game),
    __metadata("design:type", game_entity_1.Game)
], Move.prototype, "game", void 0);
Move = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Move);
exports.Move = Move;
//# sourceMappingURL=move.entity.js.map