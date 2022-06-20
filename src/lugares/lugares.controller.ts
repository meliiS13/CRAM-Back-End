import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import {Lugar} from './lugares.entity'
@Controller('lugares')
export class LugaresController {
    constructor(private lugaresService: LugaresService) { }

    @Get() // localhost:3000/Lugares
    GetLugares() {
        return this.lugaresService.getLugares();
    }

    @Get(':id') // localhost:3000/Lugares/1
    GetLugarById(@Param('id') id: string) {
        return this.lugaresService.getLugarById(id);
    }

    @Post() // localhost:3000/Lugares
    CrearLugar(@Body() lugar: Lugar) {
        return this.lugaresService.crearLugar(lugar);
    }

    @Patch(':id') // localhost:3000/Lugares/1
    EditarLugar(@Param('id') id: string, @Body() lugar: Lugar) {
        return this.lugaresService.editarLugar(id, lugar);
    }

    @Delete(':id') // localhost:3000/Lugares/1
    EliminarLugar(@Param('id') id: string) {
        return this.lugaresService.eliminarLugar(id);
    }

}
