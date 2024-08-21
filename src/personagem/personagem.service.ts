import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Injectable } from '@nestjs/common';
import { Personagem } from './entities/personagem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonagemService {

  constructor(
    @InjectRepository(Personagem) private readonly repository: Repository<Personagem>,
  ) {}

  create(createPersonagemDto: CreatePersonagemDto): Promise<Personagem> {
    const personagem: Personagem = new Personagem()
    personagem.nome = createPersonagemDto.nome
    personagem.cargo = createPersonagemDto.cargo
    personagem.tipo = createPersonagemDto.tipo

    return this.repository.save(personagem)
  }

  findAll(): Promise<Personagem[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<Personagem> {
    return this.repository.findOneBy({ id})
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    return `This action updates a #${id} personagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagem`;
  }
}
