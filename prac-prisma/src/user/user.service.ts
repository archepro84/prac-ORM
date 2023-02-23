import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(request: Prisma.UsersCreateInput) {
    const user = await this.prisma.users.create({
      data: request,
    });

    return user;
  }

  async createFakerUser() {
    const user = await this.prisma.users.create({
      data: {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        userInfos: {
          create: {
            phoneNumber: faker.phone.number(),
          },
        },
      },
      include: {
        userInfos: true,
      },
    });

    return user;
  }

  async createFakerUserMany(numUsers) {
    const data = new Array(+numUsers).fill({}).map(() => {
      return {
        name: faker.name.firstName(),
        email: faker.internet.email(),
      };
    });

    const user = await this.prisma.users.createMany({
      data,
    });

    return user;
  }

  async getUserWithAllPosts(userId) {
    const userWithPosts = await this.prisma.users.findUnique({
      where: { userId: +userId },
      include: {
        posts: {
          take: 10,
        },
      },
    });

    return userWithPosts;
  }

  async deleteUser(userId) {
    const user = await this.prisma.users.delete({
      where: { userId: +userId },
      include: {
        userInfos: true,
      },
    });

    return user;
  }
}
