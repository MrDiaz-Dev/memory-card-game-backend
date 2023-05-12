import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Game {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  game_id: number;

  @Column({ type: 'timestamptz' })
  @Field()
  date: Date;

  @Column()
  @Field((type) => Int)
  p1_points: number;

  @Column()
  @Field((type) => Int)
  p2_points: number;
}
