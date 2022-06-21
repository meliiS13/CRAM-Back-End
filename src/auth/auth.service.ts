import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';

import { Usuario } from 'src/usuarios/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    /*private jwtService: JwtService */
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usuariosService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  /*
  async register(user: RegisterAuthDto) {
    const { password, nombre, mail } = user; // aca entra la contraseña con el texto plano que ingresa el usuario
    const passToHash = await hash(password, 10)  // aca se encripta la contraseña
    const newUsuario = { IdUsuario: 1, nombre: nombre, mail: mail, password: passToHash };
    
    return this.usuariosService.crearUsuario(newUsuario as Usuario); // esto guarda en la bdd elnuevo usuario con la contraseña encryptada
  }


  async login(user: LoginAuthDto) {

    const { username, password } = user // esto saca d el user las variables para desp usarlas abajo 
    const validarUsuario = await this.usuariosService.findOne(username) // se valida que el usuario exista
    
    if (!validarUsuario) {
       return null 
    } // si no existe se da null, despues vamos a poner los http exception
    
    const validarPassword = await compare(password, validarUsuario.password) // validamos q la contra encrytada sea la misma q la q se ingresa
    
    if (!validarPassword) {
       return null 
    }

    const payload = { username: validarUsuario.username, sub: validarUsuario.IdUsuario };
    const access_token = this.jwtService.sign(payload) // genera el token 
    const data = {
      usuario: validarUsuario,
      access_token,
    }
    return data;
  } 
  */


}
