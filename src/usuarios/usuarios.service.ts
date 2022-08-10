import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usuarios: Repository<Usuario>,
    ) { }

    getUsuarios(): Promise<Usuario[]> {
        return this.usuarios.find();
    }

    getUsuarioByID(id: number): Promise<Usuario> {
        return this.usuarios.findOneBy( {IdUsuario: id});
    }

    crearUsuario(usuario: Usuario) {
        return this.usuarios.save(usuario);
    }

    editarUsuario(id: number, usuario: Usuario) {
        return this.usuarios.update(id, usuario);
    }

    async eliminarUsuario(id: number): Promise<void>  {
        await this.usuarios.delete(id);
    } 

    getUsuarioByUsername(username: string): Promise<Usuario | undefined> {
        return this.usuarios.findOneBy({username: username});
    }

}
