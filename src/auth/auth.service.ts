import { HttpException, Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { RegisterAuthDto } from './dto/registrar-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Usuario } from 'src/usuarios/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { hash, compare, genSalt } from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService
  ) { }

  async register(user: RegisterAuthDto) {
    let user_logged : Usuario
    const { password, nombre, mail, username, foto } = user; // aca entra la contraseña con el texto plano que ingresa el usuario
    const salt = await genSalt();
    const key = await hash(password, salt)  // aca se encripta la contraseña
    user_logged = { IdUsuario: 1, username: username, nombre: nombre, mail: mail, password: key, foto: foto }
    return user_logged 
    /*this.usuariosService.crearUsuario(user_logged) */// esto guarda en la bdd elnuevo usuario con la contraseña encryptada
  }


  async login(user: LoginAuthDto) {

    const { username, password } = user // esto saca d el user las variables para desp usarlas abajo 
    const validarUsuario = await this.usuariosService.getUsuarioByUsername(username) // se valida que el usuario exista

    if (!validarUsuario) throw new HttpException('user_not_found', 404)  // si no existe se da null, despues vamos a poner los http exception

    /*const validarPassword = await compare(password, validarUsuario.password)*/ // esto va cuando ya las contras de la bdd esten hasheadas

    if (password == validarUsuario.password) {
      const payload = { username: validarUsuario.username, sub: validarUsuario.IdUsuario };
      const access_token = this.jwtService.sign(payload) // genera el token 

      const data = {
        usuario: validarUsuario,
        access_token,
      }

      return data;
    }
    else {
      throw new HttpException('Incorrect_Password', 404)  // si no existe se da null, despues vamos a poner los http exception

    }
  }



}
