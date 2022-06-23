import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  IdUsuario: number; 

  @Column({name: 'Foto', type: 'text'})
  foto: string;

  @Column({name: 'Nombre', type: 'text'})
  nombre: string;

  @Column({name: 'Password', type: 'varchar'})
  password: string;

  @Column({name: 'Username'})
  username: string;

  @Column({name:'Mail'})
  mail: string;

}
