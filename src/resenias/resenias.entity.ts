import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class resenia {
  @PrimaryGeneratedColumn()
  IdResenia: number;


  @Column({name: 'Destacar', type: 'varchar'})
  destacar: string; 

  @Column({name: 'Descripcion', type: 'varchar'})
  descripcion: string; 

  @Column({name: 'Puntaje', type:'int'})
  puntaje: number;

  @Column({name:'Comentarios', type: 'varchar'})
  comentarios: string;

  @Column({name:'IdUsuario', type: 'int'})
  idUsuario: number; // hay que igualar 

  @Column ({name: 'IdLugar', type: 'int'})
  idLugar: string ;
  
  @Column({name: 'Titulo', type: 'varchar'})
  titulo: string;

}
