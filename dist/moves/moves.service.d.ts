import { CreateMoveInput } from '../DTOs/create-move.input';
import { Move } from 'src/entities/move.entity';
import { Repository } from 'typeorm';
import { Game } from 'src/entities/game.entity';
import { GamesService } from 'src/games/games.service';
export declare class MovesService {
    private movesRepository;
    private gamesService;
    constructor(movesRepository: Repository<Move>, gamesService: GamesService);
    create(createMoveInput: CreateMoveInput): Promise<Move>;
    findAll(): Promise<Move[]>;
    findOne(move_id: number): Promise<Move>;
    getGame(game_id: number): Promise<Game>;
    find_all_of_one_game(game_id: number): Promise<Move[]>;
}
