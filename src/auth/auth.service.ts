import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';


@Injectable()
export class AuthService {
    constructor(private usuariosService: UsuariosService) {}
    async validarUsuario(username: string, pass: string): Promise<any> {
        const user = await this.usuariosService.findOne(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

}
