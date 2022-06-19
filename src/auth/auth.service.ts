import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
      private usuariosService: UsuariosService,
      private jwtService: JwtService
    ) {}

    async validarUsuario(username: string, pass: string): Promise<any> {
        const user = await this.usuariosService.findOne(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async login(user:any) {
      const payload = {username: user.username, sub: user.IdUsuario};
      return{
        access_token: this.jwtService.sign(payload), // .sign genera el token 
      };
    }

}
