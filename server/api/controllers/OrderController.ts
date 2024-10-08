import { errors } from "@vinejs/vine";
import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import {
  EditOrderService,
  FindOrderService,
  FindOrderUserService,
  ListOrdersUserService,
} from "../services/OrderService";
import { FindUserService } from "../services/UserService";
import {
  IUpdateOrder,
  IUser,
  OrderCollaborator,
  OrderUser,
  Status,
} from "../types";
import { updateOrderSchema } from "../utils/vinejs";
import { generateReceivingCode } from "../utils/generate-receiving-code";

const SECRET_KEY = process.env.SECRET_KEY as string;

const listOrder = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { token } = req.headers as { token: string };

    jwt.verify(token, SECRET_KEY, (err) => {
      if (err) {
        return reply.status(401).send({
          statusCode: 401,
          message: "invalid token",
        });
      }
    });

    const { userId } = req.params as { userId: string };

    const findOrderUser = new FindOrderUserService();
    const listOrderUser = new ListOrdersUserService();
    const findOrder = new FindOrderService();
    const findUser = new FindUserService();

    const { role } = (await findUser.execute(userId)) as IUser;

    const orderUser = await findOrderUser.execute(userId);

    if (!orderUser.length) {
      return reply.status(404).send({
        statusCode: 404,
        error: "No order found",
      });
    }

    const resultClient: OrderUser[] = [];
    const resultCollaborator: OrderCollaborator[] = [];

    if (role === "User") {
      for (const element of orderUser) {
        const order = (await findOrder.execute(element?.orderId)) as OrderUser;

        resultClient.push(order);
      }

      return reply.status(200).send(resultClient);
    }

    for (const element of orderUser) {
      const orderUserList = await listOrderUser.execute(element?.orderId);

      const orderClient = orderUserList.find(({ userId: id }) => id !== userId);

      const order = await findOrder.execute(element?.orderId);

      const client = await findUser.execute(orderClient?.userId as string);

      const newOrder = {
        ...order,
        resident: client?.name,
        block: client?.block,
        apartment: client?.apartment,
      } as OrderCollaborator;

      resultCollaborator.push(newOrder);
    }

    return reply.status(200).send(resultCollaborator);
  } catch (error) {
    const { message } = error as { message: string };
    return reply.status(500).send({ error: message });
  }
};

const updateOrder = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { token } = req.headers as { token: string };

    jwt.verify(token, SECRET_KEY, (err) => {
      if (err) {
        return reply.status(401).send({
          statusCode: 401,
          message: "invalid token",
        });
      }
    });

    const { updateOrderBody } = await updateOrderSchema(
      req.body as IUpdateOrder
    );

    const { orderId, roleUser } = updateOrderBody;

    const findOrder = new FindOrderService();
    const order = await findOrder.execute(orderId);

    const newStatus = roleUser === "User" ? "Delivered" : "OnItsWay";
    const receivingCode = order?.receivingCode
      ? order?.receivingCode
      : generateReceivingCode();

    const newOrder = {
      receivingCode: receivingCode,
      status: newStatus as Status,
    };

    console.log(newOrder);

    const userService = new EditOrderService();
    await userService.execute(orderId, newOrder);

    return reply.status(200).send({
      statusCode: 200,
      message: "Order updated successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return reply
        .status(400)
        .send({ statusCode: 400, error: error.messages[0].message });
    }

    const { message } = error as { message: string };

    return reply.status(500).send({ error: message });
  }
};

export const orderControllers = {
  listOrder,
  updateOrder,
};
