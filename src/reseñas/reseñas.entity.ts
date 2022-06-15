import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Reseña {
  @PrimaryGeneratedColumn()
  IdResenia: number;

  @Column({name: 'Nombre', type: 'text'})
  titulo: string;

  @Column({name: 'Destacar', type: 'varchar'})
  destacar: string; 

  @Column({name: 'Descripcion', type: 'varchar'})
  descripcion: string; 

  @Column({name:'Comentarios', type: 'varchar'})
  comentarios: string;

  @Column({name:'IdUsuario', type: 'int'})
  idUsuario: number; // hay que igualar 

  @Column ({name: 'IdLugar', type: 'int'})
  idLugar: string ;
}
