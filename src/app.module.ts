import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresService } from './lugares/lugares.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { LugaresController } from './lugares/lugares.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { LugarModule } from './lugares/lugares.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { Lugar } from './lugares/lugares.entity';


@Module({ 
  providers: [AppService, UsuariosService, LugaresService],
  controllers: [AppController, UsuariosController, LugaresController],
  imports: [ TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [Usuario, Lugar],
    synchronize: true,
  }), LugarModule, UsuariosModule],
  
})
export class AppModule {}
