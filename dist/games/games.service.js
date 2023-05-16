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
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const game_entity_1 = require("../entities/game.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const moves_service_1 = require("../moves/moves.service");
let GamesService = class GamesService {
    constructor(gamesRepository, movesService) {
        this.gamesRepository = gamesRepository;
        this.movesService = movesService;
    }
    async findAll() {
        return this.gamesRepository.find();
    }
    async findOne(game_id) {
        return this.gamesRepository.findOne({
            where: {
                game_id,
            },
        });
    }
    async createGame(game) {
        const newGame = this.gamesRepository.create(game);
        return this.gamesRepository.save(newGame);
    }
    async updateGamePoints(game_id, player_n) {
        const gameToUptdate = await this.findOne(game_id);
        if (player_n <= 1) {
            gameToUptdate.p1_points += 1;
        }
        else {
            gameToUptdate.p2_points += 1;
        }
        return this.gamesRepository.save(gameToUptdate);
    }
    async getMoves(game_id) {
        return this.movesService.find_all_of_one_game(game_id);
    }
};
GamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.Game)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => moves_service_1.MovesService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        moves_service_1.MovesService])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map