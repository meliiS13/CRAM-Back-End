import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  password: string;

  @Column()
  username: string;

  @Column('int')
  mail: string;

}
