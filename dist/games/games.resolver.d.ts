import { GamesService } from './games.service';
import { Game } from './entitys/game.entity';
export declare class GamesResolver {
    private gamesService;
    constructor(gamesService: GamesService);
    getGames(): Promise<Game[]>;
}
