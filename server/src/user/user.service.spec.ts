// src/user/user.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async register(dto: RegisterUserDto) {
    const existed = await this.userModel.findOne({ email: dto.email });
    if (existed) {
      throw new BadRequestException('Email already exists');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const created = new this.userModel({
      email: dto.email,
      password: hashed,
    });

    await created.save();

    return { message: 'User registered successfully' };
  }
}
