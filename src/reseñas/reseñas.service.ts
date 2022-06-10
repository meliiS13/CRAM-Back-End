import { Injectable } from '@nestjs/common';
import { Reseña } from './reseñas.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class ReseñasService {
    constructor(
        @InjectRepository(Reseña)
        private reseñas: Repository<Reseña>,
    ) { }

    getUsuarios(): Promise<Reseña[]> {
        return this.reseñas.find();
    }

    getUsuarioByID(id: number): Promise<Reseña> {
        return this.reseñas.findOneBy({ id: id });
    }

    crearUsuario(reseña: Reseña) {
        return this.reseñas.save(reseña);
    }

    editarUsuario(id: number, reseña: Reseña) {
        return this.reseñas.update(id, reseña);
    }

    async eliminarUsuario(id: number): Promise<void>  {
        await this.reseñas.delete(id);
    }

}
