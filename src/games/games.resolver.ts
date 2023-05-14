import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Query } from '@nestjs/graphql';
import { Game } from '../entities/game.entity';
import { CreateGameInput } from 'src/DTOs/create-game.input';

@Resolver()
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query((returns) => [Game])
  getGames() {
    return this.gamesService.findAll();
  }

  @Query((returns) => Game)
  getGameByID(@Args('game_id') game_id: number) {
    return this.gamesService.findOne(game_id);
  }

  @Mutation((returns) => Game)
  createGame(@Args('gameInput') gameInput: CreateGameInput) {
    return this.gamesService.createGame(gameInput);
  }
}
