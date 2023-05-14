import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateGameInput {

  @Field()
  date: Date = new Date();

  @Field((type) => Int)
  p1_points: number;

  @Field((type) => Int)
  p2_points: number;
  
}