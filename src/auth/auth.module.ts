import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule],
  providers: [AuthService]
})
export class AuthModule {}
