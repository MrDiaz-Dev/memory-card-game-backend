import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import { Move } from './move.entity';

@Entity()
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

  @OneToMany( () => Move, move => move.game )
  @Field( () => [Move], { nullable: true } ) 
  Moves: Move[];
}
