import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX } from 'src/app.utils';

export class UserRegisterRequestDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'user' 
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@gmail.com' 
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'User@123' 
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD, { message: REGEX.PASSWORD_MESSAGE })
  password: string;

  @ApiProperty({
    description: 'Confirm the password',
    example: 'User@123' 
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD, { message: REGEX.PASSWORD_MESSAGE })
  confirm: string;
}
