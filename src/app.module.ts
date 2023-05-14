// default modules
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// custom modules
import { GamesModule } from './games/games.module';

// dependencies
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovesModule } from './moves/moves.module';

@Module({
  imports: [
    GamesModule,
    //graphql setup
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // typeorm setup
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Perito.01',
      database: 'memory-game',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // from here the db get its entitys
      synchronize: true, // enable the creation when the data its not found
      retryAttempts: 10, // when someting occurs the db will retry to connect max 10 times
      retryDelay: 3000, // 3s between each retry
    }),
    MovesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
