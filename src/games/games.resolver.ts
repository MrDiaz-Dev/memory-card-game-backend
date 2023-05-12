import { Resolver } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Query } from '@nestjs/graphql';
import { Game } from './entitys/game.entity';

@Resolver()
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query((returns) => [Game])
  getGames() {
    return this.gamesService.findAll();
  }
}
