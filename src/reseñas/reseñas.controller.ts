import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ReseñasService } from './reseñas.service';
import { Reseña } from './reseñas.entity';

@Controller('reseñas')
export class ReseñasController {
    constructor(private ReseñasService: ReseñasService) { }

    @Get() // localhost:3000/reseñas/
    getReseñas() {
        return this.ReseñasService.getReseña();
    }

    @Get(':id') // localhost:3000/reseñas/1
    getReseñaByID(@Param('id') id: number) {
        return this.ReseñasService.getReseñabyID(id);
    }

    @Post() // localhost:3000/reseñas
    crearReseña(@Body() reseñas: Reseña) {
        return this.ReseñasService.crearReseña(reseñas);
    }

    @Patch(':id') // localhost:3000/reseñas/1
    editarReseña(@Param('id') id: number, @Body() reseñas: Reseña) {
        return this.ReseñasService.editarReseña(id, reseñas);
    }

    @Delete(':id') // localhost:3000/reseñas/1
    eliminarReseña(@Param('id') id: number) {
        return this.ReseñasService.eliminarReseña(id);
    }


}
