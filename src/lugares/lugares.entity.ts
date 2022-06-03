import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('Nombre')
  nombre: string;

  @Column('Descripcion')
  description: string;

}

