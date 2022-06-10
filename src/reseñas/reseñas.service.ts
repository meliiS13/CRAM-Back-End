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

    getReseña(): Promise<Reseña[]> {
        return this.reseñas.find();
    }

    getReseñabyID (id: number): Promise<Reseña> {
        return this.reseñas.findOneBy({ IdResenia: id });
    }

    crearReseña(reseña: Reseña) {
        return this.reseñas.save(reseña);
    }

    editarReseña(id: number, reseña: Reseña) {
        return this.reseñas.update(id, reseña);
    }

    async eliminarReseña(id: number): Promise<void>  {
        await this.reseñas.delete(id);
    }

}
