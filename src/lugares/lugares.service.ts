import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lugar } from './lugares.entity';

@Injectable()
export class LugaresService {

    constructor(
        @InjectRepository(Lugar)
        private lugares: Repository<Lugar>,
    ) { }

    getLugares(): Promise<Lugar[]> {
        return this.lugares.find();
    }

    getLugarById(id: string): Promise<Lugar> {
        return this.lugares.findOneBy({ IdLugar: id });
    }

    async eliminarLugar(id: string): Promise<void> {
        await this.lugares.delete({ IdLugar: id });
    }

    crearLugar(lugar: Lugar): Promise<Lugar> {
        return this.lugares.save(lugar);
    }

    async editarLugar(id: string, lugar: Lugar): Promise<void> {
        await this.lugares.update({ IdLugar: id }, lugar);
    }
}