import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';
@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  IdLugar: string;

  @Column({name : 'nombre', type:'text'})
  
  nombre: string;

  @Column({name: 'Descripcion', type:'text'})
  description: string;

}

