import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entitys/game.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GamesService, GamesResolver],
})
export class GamesModule {}