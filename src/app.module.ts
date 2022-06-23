import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugarModule } from './lugares/lugares.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { Lugar } from './lugares/lugares.entity';
import { resenia } from './resenias/resenias.entity';
import { reseniaModule } from './resenias/resenias.module';
import { AuthModule } from './auth/auth.module';


@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [
    LugarModule,
    UsuariosModule,
    reseniaModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'MicrosoftAccount\rusofiba@gmail.com',
      /* password: 'alumno',  */
      database: 'CRAM',
      entities: [Usuario, Lugar, resenia],
      synchronize: false,
    }),
  ],

})
export class AppModule { }
