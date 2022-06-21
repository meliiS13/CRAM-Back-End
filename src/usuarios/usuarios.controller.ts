import { Controller, Body, Get, Post, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service'
import { Usuario } from './usuario.entity'


@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) { }

    @Get() // localhost:3000/usuarios/
    getUsuarios() {
        return this.usuariosService.getUsuarios();
    }


    @Get(':id') //localhost:3000/usuarios/1
    getUsuarioByID(@Param('id') id: number) {
        return this.usuariosService.getUsuarioByID(id);
    }

    @Post() //localhost:3000/usuarios
    crearUsuario(@Body() usuario: Usuario) {
        return this.usuariosService.crearUsuario(usuario);
    }

    @Patch(':id') //localhost:3000/usuarios/1
    editarUsuario(@Param('id') id: number, @Body() usuario: Usuario) {
        return this.usuariosService.editarUsuario(id, usuario);
    }

    @Delete(':id') //localhost:3000/usuarios/1
    eliminarUsuario(@Param('id') id: number) {
        return this.usuariosService.eliminarUsuario(id);
    }


}
