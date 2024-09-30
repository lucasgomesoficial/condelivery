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

export class FindUserByEmailService {
  async execute(email: string) {
    return await prismaClient.user.findUnique({
      where: { email },
    });
  }
}

export class CreateUserService {
  async execute(user: IUser) {
    const newUser = {
      email: user.email,
      password: await createdHashPassword(user.password),
      name: user.name,
      id_document: user.idDocument,
      id_condominium: user.idCondominium,
      phone_number: user.phoneNumber,
      block: user.block,
      apartment: user.apartment,
      role: user.role,
    };

    await prismaClient.user.create({
      data: newUser,
    });
  }
}

export class EditUserService {
  async execute(userId: string, user: IUser) {
    const newUser = {
      email: user.email,
      password: await createdHashPassword(user.password),
      name: user.name,
      id_document: user.idDocument,
      id_condominium: user.idCondominium,
      phone_number: user.phoneNumber,
      block: user.block,
      apartment: user.apartment,
      role: user.role,
      updated_at: new Date(),
    };

    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: newUser,
    });
  }
}

export class DeleteUserService {
  async execute(id: string) {
    await prismaClient.user.delete({
      where: {
        id,
      },
    });
  }
}
