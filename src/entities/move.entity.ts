import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';

@Entity()
@ObjectType()
export class Move{

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  move_id: number;

  @PrimaryColumn()
  @Field((type) => Int)
  game_id: number;

  @PrimaryColumn()
  @Field((type) => Int)
  turn: number;

  @PrimaryColumn()
  @Field((type) => Int)
  player: number;
  
  @Column()
  @Field((type) => Int)
  card_number: number;

  @ManyToOne( () => Game, Game => Game.Moves )
  @Field( () => Game )
  game: Game;  

}