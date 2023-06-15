import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';
import { UserRoles } from './enums/user.enum';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({
    description: 'id',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The firstname of the user.',
    example: 'Alice',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The email of the user.',
    example: 'Alice@gmail.com',
  })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user.',
    example: 'Alice@123',
  })
  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @ApiProperty({
    description: 'When user created',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'When user updated',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
