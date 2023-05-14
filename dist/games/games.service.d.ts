import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';
import { CreateGameInput } from 'src/DTOs/create-game.input';
export declare class GamesService {
    private gamesRepository;
    constructor(gamesRepository: Repository<Game>);
    findAll(): Promise<Game[]>;
    findOne(game_id: number): Promise<Game>;
    createGame(game: CreateGameInput): Promise<Game>;
}
