import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'
import { UsuariosModule } from '../usuarios/usuarios.module';
import { JwtStrategy } from './jwt.strategy';
import {JwtModule} from '@nestjs/jwt';
import {JwtConstants} from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { Usuario } from 'src/usuarios/usuario.entity';

@Module({
  imports: [
    UsuariosModule,
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      secret: JwtConstants.secret,
    }),
  ],
  providers: [AuthService, JwtStrategy],  
  exports:[AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
