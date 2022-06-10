import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Usuario} from 'src/usuarios/usuario.entity';
import { Lugar } from 'src/lugares/lugares.entity';
@Entity()
export class Reseña {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'Nombre', type: 'varchar'})
  titulo: string;

  @Column({name: 'Descripcion'})
  descripcion: string; // creo que meli se comió la parte que más destacó en la tabla, fijate en figma dsp

  @Column({name:'Comentarios'})
  comentarios: string;

  @Column({name:'IdUsuario'})
  idIsuario: Usuario.id; // ee no sé como ponerlo

  @Column ({name: 'IdLugar'})
  idLugar: Lugar.id ;
}
