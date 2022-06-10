import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Reseña {
  @PrimaryGeneratedColumn()
  IdResenia: number;

  @Column({name: 'Nombre', type: 'text'})
  titulo: string;

  @Column({name: 'Descripcion'})
  descripcion: string; // creo que meli se comió la parte que más destacó en la tabla, fijate en figma dsp

  @Column({name:'Comentarios'})
  comentarios: string;

  @Column({name:'IdUsuario'})
  idUsuario: number; // hay que igualar EN ALGUNA PARTE

  @Column ({name: 'IdLugar'})
  idLugar: string ;
}
