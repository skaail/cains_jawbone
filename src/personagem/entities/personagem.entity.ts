import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personagem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30})
    nome: string;

    @Column({ type: 'varchar', length: 30})
    cargo: string;

    @Column({ type: 'varchar', length: 30})
    tipo: string;

}
