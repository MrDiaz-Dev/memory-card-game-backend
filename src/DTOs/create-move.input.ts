import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMoveInput {

  @Field((type) => Int)
  game_id: number;

  @Field((type) => Int)
  turn: number;

  @Field((type) => Int)
  player: number;

  @Field((type) => Int)
  card_number: number;
}
