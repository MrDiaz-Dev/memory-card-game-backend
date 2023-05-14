import { Test, TestingModule } from '@nestjs/testing';
import { MovesResolver } from './moves.resolver';
import { MovesService } from './moves.service';

describe('MovesResolver', () => {
  let resolver: MovesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovesResolver, MovesService],
    }).compile();

    resolver = module.get<MovesResolver>(MovesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
