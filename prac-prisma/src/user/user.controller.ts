import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  async getUserWithAllPosts(@Param('userId') userId) {
    return this.userService.getUserWithAllPosts(userId);
  }

  @Post()
  async createUser(@Body() body) {
    return this.userService.createUser(body);
  }

  @Post('faker')
  async createFakerUser() {
    return this.userService.createFakerUser();
  }

  @Post('faker-many')
  async createFakerUserMany(@Body() body) {
    const { numUsers } = body;
    return this.userService.createFakerUserMany(numUsers);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId) {
    return this.userService.deleteUser(userId);
  }
}
