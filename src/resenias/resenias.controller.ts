import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { reseniasService } from './resenias.service';
import { resenia } from './resenias.entity';

@Controller('resenias')
export class reseniasController {
    constructor(private reseniasService: reseniasService) { }

    @Get() // localhost:3000/resenias/
    getresenias() {
        return this.reseniasService.getresenia();
    }

    @Get(':id') // localhost:3000/resenias/1
    getreseniaByID(@Param('id') id: number) {
        return this.reseniasService.getreseniabyID(id);
    }

    @Post() // localhost:3000/resenias
    crearresenia(@Body() resenias: resenia) {
        return this.reseniasService.crearresenia(resenias);
    }

    @Patch(':id') // localhost:3000/resenias/1
    editarresenia(@Param('id') id: number, @Body() resenias: resenia) {
        return this.reseniasService.editarresenia(id, resenias);
    }

    @Delete(':id') // localhost:3000/resenias/1
    eliminarresenia(@Param('id') id: number) {
        return this.reseniasService.eliminarresenia(id);
    }


}
