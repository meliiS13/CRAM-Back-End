import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable() // npm install --save @nestjs/passport passport passport-local
//npm install --save-dev @types/passport-local
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validarUsuario(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}