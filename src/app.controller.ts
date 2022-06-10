import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LugaresService } from './lugares/lugares.service';
import { ReseñasService } from './reseñas/reseñas.service';
import { UsuariosService } from './usuarios/usuarios.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReseñas(): string {
    return this.appService.getHello();
  }


}
