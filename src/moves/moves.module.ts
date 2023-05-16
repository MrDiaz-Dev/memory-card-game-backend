import { Module, forwardRef } from '@nestjs/common';
import { MovesService } from './moves.service';
import { MovesResolver } from './moves.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Move } from 'src/entities/move.entity';
import { GamesModule } from 'src/games/games.module';

@Module({
  imports: [TypeOrmModule.forFeature([Move]), forwardRef(() => GamesModule)],
  providers: [MovesResolver, MovesService],
  exports: [MovesService],
})
export class MovesModule {}
