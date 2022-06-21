import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'
import {PassportModule} from '@nestjs/passport'
import { UsuariosModule } from '../usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { Usuario } from 'src/usuarios/usuario.entity';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    TypeOrmModule.forFeature([Usuario]),
    /*JwtModule.register({
      secret: JwtConstants.secret,
    }), */
  ], 
  providers: [AuthService, LocalStrategy, /*JwtStrategy*/],  
  exports:[AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
