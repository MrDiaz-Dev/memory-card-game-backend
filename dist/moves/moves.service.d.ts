import { CreateMoveInput } from '../DTOs/create-move.input';
import { Move } from 'src/entities/move.entity';
import { Repository } from 'typeorm';
export declare class MovesService {
    private movesRepository;
    constructor(movesRepository: Repository<Move>);
    create(createMoveInput: CreateMoveInput): Promise<Move>;
    findAll(): Promise<Move[]>;
    findOne(move_id: number): Promise<Move>;
}
