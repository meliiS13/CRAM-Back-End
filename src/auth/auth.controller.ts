import { Controller, Get, Body, Request, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard} from '@nestjs/passport'
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterAuthDto } from './dto/registrar-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth') // localhost:3000/auth
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(JwtAuthGuard)
    @Post('register')
    RegisterUser(@Body() usuarioObject: RegisterAuthDto){
        return this.authService.register(usuarioObject)
    }

    @Post('login') // Localhost:3000/auth/login
    loginUse(@Body() usuarioObject: LoginAuthDto) {
      return this.authService.login(usuarioObject); 
    } 
}
