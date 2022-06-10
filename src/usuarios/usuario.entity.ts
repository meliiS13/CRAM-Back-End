import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number; //cambié el id a number

  @Column({name: 'Nombre', type: 'varchar'})
  nombre: string;

  @Column({name: 'Password', type: 'varchar'})
  password: string;

  @Column({name: 'Username'})
  username: string;

  @Column({name:'Mail'})
  mail: string;

}
