import { Game } from './entitys/game.entity';
import { Repository } from 'typeorm';
export declare class GamesService {
    private gamesRepository;
    constructor(gamesRepository: Repository<Game>);
    findAll(): Promise<Game[]>;
}
