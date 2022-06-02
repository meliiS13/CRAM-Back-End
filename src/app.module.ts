import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresController } from './lugares/lugares.controller';
import { UsuarioController } from './usuario/usuario.controller';
import {Usuario} from './usuario/usuario.entity';
import {Lugares} from './lugares/lugares.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Usuario, Lugares],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
