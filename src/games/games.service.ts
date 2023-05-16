import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Game } from '../entities/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameInput } from 'src/DTOs/create-game.input';
import { Move } from 'src/entities/move.entity';
import { MovesService } from 'src/moves/moves.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @Inject(forwardRef(() => MovesService))
    private movesService: MovesService,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gamesRepository.find();
  }

  async findOne(game_id: number): Promise<Game> {
    return this.gamesRepository.findOne({
      where: {
        game_id,
      },
    });
  }

  async createGame(game: CreateGameInput): Promise<Game> {
    const newGame = this.gamesRepository.create(game);
    return this.gamesRepository.save(newGame);
  }

  async updateGamePoints(game_id: number, player_n: number): Promise<Game> {
    const gameToUptdate = await this.findOne(game_id);
    if (player_n <= 1) {
      gameToUptdate.p1_points += 1
    } else {
      gameToUptdate.p2_points += 1
    }
    return this.gamesRepository.save(gameToUptdate)
  }

  async getMoves(game_id: number): Promise<Move[]> {
    return this.movesService.find_all_of_one_game(game_id);
  }
}
