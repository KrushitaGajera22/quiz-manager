import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthguard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthguard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthguard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthguard)
  @Get('user')
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
