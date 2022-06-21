import { Injectable } from '@nestjs/common';
import { resenia } from './resenias.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class reseniasService {
    constructor(
        @InjectRepository(resenia)
        private resenias: Repository<resenia>,
    ) { }

    getresenia(): Promise<resenia[]> {
        return this.resenias.find();
    }

    getreseniabyID (id: number): Promise<resenia> {
        return this.resenias.findOneBy({ IdResenia: id });
    }

    crearresenia(resenia: resenia) {
        return this.resenias.save(resenia);
    }

    editarresenia(id: number, resenia: resenia) {
        return this.resenias.update(id, resenia);
    }

    async eliminarresenia(id: number): Promise<void>  {
        await this.resenias.delete(id);
    }

}
