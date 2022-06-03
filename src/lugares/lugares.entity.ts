import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';
@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({name : 'nombre', type:'varchar'})
  
  nombre: string;

  @Column({name: 'Descripcion', type:'varchar'})
  description: string;

}

