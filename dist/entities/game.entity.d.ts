import { Move } from './move.entity';
export declare class Game {
    game_id: number;
    date: Date;
    p1_points: number;
    p2_points: number;
    Moves: Move[];
}
