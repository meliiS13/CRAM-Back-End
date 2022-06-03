import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  description: string;

}

