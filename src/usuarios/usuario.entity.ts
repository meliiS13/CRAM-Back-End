import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('Nombre')
  nombre: string;

  @Column('Password')
  password: string;

  @Column('Username')
  username: string;

  @Column('Mail')
  mail: string;

}
