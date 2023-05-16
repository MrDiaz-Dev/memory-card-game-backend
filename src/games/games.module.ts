import { Module, forwardRef } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { MovesModule } from 'src/moves/moves.module';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), forwardRef(() => MovesModule)],
  providers: [GamesService, GamesResolver],
  exports: [GamesService],
})
export class GamesModule {}
