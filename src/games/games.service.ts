import { Injectable } from '@nestjs/common';
import { Game } from '../entities/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameInput } from 'src/DTOs/create-game.input';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
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
}
