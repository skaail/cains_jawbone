import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';

@Module({
  controllers: [PersonagemController],
  providers: [PersonagemService],
  imports: [TypeOrmModule.forFeature([Personagem])]
})
export class PersonagemModule {}
