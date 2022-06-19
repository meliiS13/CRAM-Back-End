import {ExtractJwt, Strategy} from 'passport-jwt';
import { PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {JwtConstants} from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // si te manda uno expired te manda 401
            secretOrKey: jwtConstants.secret,
        });
     }

     async validate(payload: any){
        return {IdUsuario: payload.sub, username: payload.username};
     }

}