import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NewUserDto } from './dto/new-user.dto';
import { Users } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: "Create user"})
    @ApiResponse({status: 200, type: Users})
    @Post()
    create(@Body() usersDto: NewUserDto) {
        return this.usersService.createUser(usersDto)
    }
    @ApiOperation({summary: "Get all users"})
    @ApiResponse({status: 200, type: [Users]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
