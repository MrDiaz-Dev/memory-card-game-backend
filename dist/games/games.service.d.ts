import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';
import { CreateGameInput } from 'src/DTOs/create-game.input';
import { Move } from 'src/entities/move.entity';
import { MovesService } from 'src/moves/moves.service';
export declare class GamesService {
    private gamesRepository;
    private movesService;
    constructor(gamesRepository: Repository<Game>, movesService: MovesService);
    findAll(): Promise<Game[]>;
    findOne(game_id: number): Promise<Game>;
    createGame(game: CreateGameInput): Promise<Game>;
    updateGamePoints(game_id: number, player_n: number): Promise<Game>;
    getMoves(game_id: number): Promise<Move[]>;
}
