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

    mostrarLugares(): Promise<Lugar[]> {
        return this.lugares.find();
    }

    encontrarlugar(id: string): Promise<Lugar> {
        return this.lugares.findOneBy({ id: id });
    }

    async eliminarlugar(id: string): Promise<void> {
        await this.lugares.delete({ id: id });
    }

    crearLugar(lugar: Lugar): Promise<Lugar> {
        return this.lugares.save(lugar);
    }

    async editarLugar(id: string, lugar: Lugar): Promise<void> {
        await this.lugares.update({ id: id }, lugar);
    }
}