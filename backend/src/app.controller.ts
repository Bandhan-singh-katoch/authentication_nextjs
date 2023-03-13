import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {

  constructor(private authService: AuthService, private userService: UsersService){}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(" I am in backend ");
    console.log(req.user);
    return this.authService.login(req.user);
  } 

  @UseGuards(JwtAuthGuard)
  @Get('profile') 
  getProfile(@Request() req){
    return req.user;
  }

}
