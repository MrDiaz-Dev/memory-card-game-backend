import { Args, Mutation, Parent, ResolveField, Resolver, Int } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Query } from '@nestjs/graphql';
import { Game } from '../entities/game.entity';
import { CreateGameInput } from 'src/DTOs/create-game.input';
import { Move } from 'src/entities/move.entity';

@Resolver((of) => Game)
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query((returns) => [Game])
  getGames() {
    return this.gamesService.findAll();
  }

  @Query((returns) => Game)
  getGameByID(@Args('game_id', { type: () => Int }) game_id: number) {
    return this.gamesService.findOne(game_id);
  }
  
  @Mutation((returns) => Game)
  createGame(@Args('gameInput') gameInput: CreateGameInput) {
    return this.gamesService.createGame(gameInput);
  }

  @Mutation((returns) => Game)
  updateGamePoints(@Args('game_id', { type: () => Int }) game_id: number, @Args('player_n', { type: () => Int }) player_n: number) {
    return this.gamesService.updateGamePoints(game_id, player_n);
  }

  @ResolveField( (returns) => [Move] )
  getMoves( @Parent() game: Game ): Promise<Move[]> {
    return this.gamesService.getMoves(game.game_id);
  }
}
