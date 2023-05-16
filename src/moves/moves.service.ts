import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateMoveInput } from '../DTOs/create-move.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Move } from 'src/entities/move.entity';
import { Repository } from 'typeorm';
import { Game } from 'src/entities/game.entity';
import { GamesService } from 'src/games/games.service';

@Injectable()
export class MovesService {
  constructor(
    @InjectRepository(Move)
    private movesRepository: Repository<Move>,
    @Inject(forwardRef(() => GamesService))
    private gamesService: GamesService,
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

  async getGame(game_id: number): Promise<Game> {
    return this.gamesService.findOne(game_id);
  }

  async find_all_of_one_game(game_id: number): Promise<Move[]> {
    return this.movesRepository.findBy({
      game_id,
    });
  }
}
