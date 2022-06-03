import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugarModule } from './lugares/lugares.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { Lugar } from './lugares/lugares.entity';


@Module({ 
  providers: [AppService],
  controllers: [AppController],
  imports: [ LugarModule, UsuariosModule, TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'alumno',
    password: 'alumno',
    database: 'ProyectoFinal',
    entities: [Usuario, Lugar],
    synchronize: false,
  }), 
  ],
  
})
export class AppModule {}
