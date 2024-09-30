import { prismaClient } from "../prisma";
import { IOrder } from "../types";

export class FindOrderUserService {
  async execute(userId: string) {
    return await prismaClient.orderUser.findMany({
      where: { userId },
    });
  }
}

export class ListOrdersUserService {
  async execute(orderId: string) {
    return await prismaClient.orderUser.findMany({
      where: { orderId },
    });
  }
}

export class FindOrderService {
  async execute(id: string) {
    return await prismaClient.order.findUnique({
      where: { id },
    });
  }
}

export class EditOrderService {
  async execute(orderId: string, order: IOrder) {
    await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: order,
    });
  }
}
