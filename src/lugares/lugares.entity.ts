import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Lugares {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nombre: string;

  @Column('text')
  description: string;


}

