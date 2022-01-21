import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NewUserDto } from './dto/new-user.dto';
import { Users } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(Users) private usersRepository: typeof Users){}

    async createUser(dto: NewUserDto) {
        const user = await this.usersRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.usersRepository.findAll();
        return users;
    }
}

