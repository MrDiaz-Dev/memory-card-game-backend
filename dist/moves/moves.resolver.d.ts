import { MovesService } from './moves.service';
import { Move } from '../entities/move.entity';
import { CreateMoveInput } from '../DTOs/create-move.input';
export declare class MovesResolver {
    private readonly movesService;
    constructor(movesService: MovesService);
    createMove(createMoveInput: CreateMoveInput): Promise<Move>;
    findAll(): Promise<Move[]>;
    findOne(move_id: number): Promise<Move>;
}
