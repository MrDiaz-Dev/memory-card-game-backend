import { Injectable } from '@nestjs/common';
import { CreateMoveInput } from '../DTOs/create-move.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Move } from 'src/entities/move.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovesService {
  constructor(
    @InjectRepository(Move) private movesRepository: Repository<Move>,
  ) {}

  create(createMoveInput: CreateMoveInput) {
    const newMove = this.movesRepository.create(createMoveInput);
    return this.movesRepository.save(newMove);
  }

  findAll(): Promise<Move[]> {
    return this.movesRepository.find();
  }

  findOne(move_id: number): Promise<Move> {
    return this.movesRepository.findOne({
      where: {
        move_id,
      },
    });
  }
}
