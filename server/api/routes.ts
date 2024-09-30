import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { userControllers } from "./controllers/UserController";
import { authControllers } from "./controllers/authController";
import { orderControllers } from "./controllers/OrderController";

export const routes = async (fastify: FastifyInstance) => {
  fastify.get("/", () => {
    return { ping: "pong" };
  });

  fastify.post("/login", async (req: FastifyRequest, reply: FastifyReply) => {
    return await authControllers.login(req, reply);
  });

  fastify.get(
    "/user/:userId",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return await userControllers.findUser(req, reply);
    }
  );

  fastify.post("/user", async (req: FastifyRequest, reply: FastifyReply) => {
    return await userControllers.createdUser(req, reply);
  });

  fastify.put(
    "/user/:userId",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return await userControllers.editUser(req, reply);
    }
  );

  fastify.delete(
    "/user/:userId",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return await userControllers.deleteUser(req, reply);
    }
  );

  fastify.get(
    "/orders-list/:userId",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return await orderControllers.listOrder(req, reply);
    }
  );

  fastify.put(
    "/order-update",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return await orderControllers.updateOrder(req, reply);
    }
  );
};
