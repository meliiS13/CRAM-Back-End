import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import {Lugar} from './lugares.entity'
@Controller('lugares')
export class LugaresController {
    constructor(private lugaresService: LugaresService) { }

    @Get()
    GetLugares() {
        return this.lugaresService.getLugares();
    }

    @Get(':id')
    GetLugarById(@Param('id') id: string) {
        return this.lugaresService.getLugarById(id);
    }

    @Post()
    CrearLugar(@Body() lugar: Lugar) {
        return this.lugaresService.crearLugar(lugar);
    }

    @Patch(':id')
    EditarLugar(@Param('id') id: string, @Body() lugar: Lugar) {
        return this.lugaresService.editarLugar(id, lugar);
    }

    @Delete(':id')
    EliminarLugar(@Param('id') id: string) {
        return this.lugaresService.eliminarLugar(id);
    }

}
