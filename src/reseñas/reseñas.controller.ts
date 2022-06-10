import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ReseñasService } from './reseñas.service';
import { Reseña } from './reseñas.entity';

@Controller('reseñas')
export class ReseñasController {
    constructor(private ReseñasService: ReseñasService) { }

    @Get()
    getReseñas() {
        return this.ReseñasService.getReseñas();
    }

    @Get(':id')
    getReseñaByID(@Param('id') id: number) {
        return this.ReseñasService.getReseñaByID(id);
    }

    @Post()
    crearReseña(@Body() reseñas: Reseña) {
        return this.ReseñasService.crearReseña(Reseña);
    }

    @Patch(':id')
    editarReseña(@Param('id') id: number, @Body() reseñas: Reseña) {
        return this.ReseñasService.editarReseña(id, Reseña);
    }

    @Delete(':id')
    eliminarReseña(@Param('id') id: number) {
        return this.ReseñasService.eliminarReseña(id);
    }


}
