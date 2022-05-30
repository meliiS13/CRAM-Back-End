import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresController } from './lugares/lugares.controller';
import { UsuarioController } from './usuario/usuario.controller';

@Module({
  imports: [],
  controllers: [AppController, LugaresController, UsuarioController],
  providers: [AppService],
})
export class AppModule {}
