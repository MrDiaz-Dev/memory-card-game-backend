import { Module } from '@nestjs/common';
import { MovesService } from './moves.service';
import { MovesResolver } from './moves.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Move } from 'src/entities/move.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Move])
  ],
  providers: [MovesResolver, MovesService]
})
export class MovesModule {}
