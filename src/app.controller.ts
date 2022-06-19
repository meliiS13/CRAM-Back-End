import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard } from '@nestjs/passport';
import {LocalAuthGuard} from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user); //devuelve un jwt
  }
}
