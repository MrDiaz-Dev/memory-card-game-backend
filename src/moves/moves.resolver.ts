import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { MovesService } from './moves.service';
import { Move } from '../entities/move.entity';
import { CreateMoveInput } from '../DTOs/create-move.input';
import { Game } from 'src/entities/game.entity';

@Resolver((of) => Move)
export class MovesResolver {
  constructor(private readonly movesService: MovesService) {}

  @Mutation(() => Move)
  createMove(@Args('createMoveInput') createMoveInput: CreateMoveInput) {
    return this.movesService.create(createMoveInput);
  }

  @Query(() => [Move], { name: 'getMoves' })
  findAll() {
    return this.movesService.findAll();
  }

  @Query(() => Move, { name: 'getMove' })
  findOne(@Args('id', { type: () => Int }) move_id: number) {
    return this.movesService.findOne(move_id);
  }

  @ResolveField( (returns) => Game )
  getGame( @Parent() move: Move ): Promise<Game> {
    return this.movesService.getGame(move.game_id);
  }

}
