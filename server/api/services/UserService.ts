import { prismaClient } from "../prisma";
import { IUser } from "../types";
import { createdHashPassword } from "../utils/bcrypt";

export class FindUserService {
  async execute(id: string) {
    return await prismaClient.user.findFirst({
      where: { id },
    });
  }
}

export class CreateUserService {
  async execute(user: IUser) {
    const newUser = {
      ...user,
      password: await createdHashPassword(user.password),
    };

    await prismaClient.user.create({
      data: newUser,
    });
  }
}

export class EditUserService {
  async execute(userEmail: string, user: IUser) {
    const newUser = {
      ...user,
      password: await createdHashPassword(user.password),
      updated_at: new Date(),
    };

    console.log("--------------", newUser);

    await prismaClient.user.update({
      where: {
        email: userEmail,
      },
      data: newUser,
    });
  }
}

export class DeleteUserService {
  async execute(email: string) {
    await prismaClient.user.delete({
      where: {
        email,
      },
    });
  }
}
