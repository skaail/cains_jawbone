import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemModule } from './personagem/personagem.module';
import { Personagem } from './personagem/entities/personagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: [Personagem],
      database: 'CainsJawbone',
      synchronize: true,
      logging: true
    }),
    PersonagemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
