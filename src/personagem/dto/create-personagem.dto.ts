import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePersonagemDto {
    @IsString()
    @MinLength(2, {message: 'O nome do personagem deve ter pelo menos 2 caracteres'})
    @IsNotEmpty()
    nome: string

    @IsString()
    @MinLength(2, {message: 'O cargo do personagem deve ter pelo menos 2 caracteres'})
    @IsNotEmpty()
    cargo: string

    @IsString()
    @IsEnum(['Narrador, Vítima, Assassino'])
    tipo: string
}
