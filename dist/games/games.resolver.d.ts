import { GamesService } from './games.service';
import { Game } from '../entities/game.entity';
import { CreateGameInput } from 'src/DTOs/create-game.input';
import { Move } from 'src/entities/move.entity';
export declare class GamesResolver {
    private gamesService;
    constructor(gamesService: GamesService);
    getGames(): Promise<Game[]>;
    getGameByID(game_id: number): Promise<Game>;
    createGame(gameInput: CreateGameInput): Promise<Game>;
    updateGamePoints(game_id: number, player_n: number): Promise<Game>;
    getMoves(game: Game): Promise<Move[]>;
}
