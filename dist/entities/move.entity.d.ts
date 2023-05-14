import { Game } from './game.entity';
export declare class Move {
    move_id: number;
    game_id: number;
    turn: number;
    player: number;
    card_number: number;
    game: Game;
}
