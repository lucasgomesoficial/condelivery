import { errors } from "@vinejs/vine";
import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import {
  CreateUserService,
  DeleteUserService,
  EditUserService,
  FindUserService,
} from "../services/UserService";
import { IUser } from "../types";
import { userSchema } from "../utils/vinejs";

const SECRET_KEY = process.env.SECRET_KEY as string;

const findUser = async (req: FastifyRequest, reply: FastifyReply) => {
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

    const { userEmail } = req.params as { userEmail: string };

    const findUser = new FindUserService();
    const user = await findUser.execute(userEmail);

    if (!user) {
      return reply.status(200).send({
        statusCode: 200,
        error: "No users found",
      });
    }

    return reply.status(200).send(user);
  } catch (error) {
    const { message } = error as { message: string };
    return reply.status(500).send({ error: message });
  }
};

const createdUser = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { userBody } = await userSchema(req.body as IUser);

    const { role } = userBody as {
      role: "User" | "Collaborator" | "Admin";
    };

    const newUser = {
      ...userBody,
      role,
    };

    const userService = new CreateUserService();
    await userService.execute(newUser);

    return reply.status(201).send({
      statusCode: 201,
      message: "User created successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return reply
        .status(400)
        .send({ statusCode: 400, error: error.messages[0].message });
    }

    const { message, code } = error as { message: string; code: string };

    if (code === "P2002") {
      return reply.status(400).send({
        statusCode: 400,
        error:
          "There is a unique constraint violation, a new user cannot be created with this email",
      });
    }

    return reply.status(500).send({ error: message });
  }
};

const editUser = async (req: FastifyRequest, reply: FastifyReply) => {
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

    const { userEmail } = req.params as { userEmail: string };
    const { userBody } = await userSchema(req.body as IUser);

    const { role } = userBody as { role: "User" | "Collaborator" | "Admin" };

    const newUser = {
      email: userBody.email,
      password: userBody.password,
      name: userBody.name,
      id_document: userBody.idDocument,
      phone_number: userBody.phoneNumber,
      id_condominium: userBody.idCondominium,
      block: userBody.block,
      apartment: userBody.apartment,
      role,
    };

    const userService = new EditUserService();
    await userService.execute(userEmail, newUser);

    return reply.status(200).send({
      statusCode: 200,
      message: "User updated successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return reply
        .status(400)
        .send({ statusCode: 400, error: error.messages[0].message });
    }

    const { message, code } = error as { message: string; code: string };

    if (code === "P2002") {
      return reply.status(400).send({
        statusCode: 400,
        error:
          "There is a unique constraint violation, a new user cannot be created with this email",
      });
    }

    return reply.status(500).send({ error: message });
  }
};

const deleteUser = async (req: FastifyRequest, reply: FastifyReply) => {
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

    const { userEmail } = req.params as { userEmail: string };

    const userService = new DeleteUserService();
    await userService.execute(userEmail);

    return reply.status(200).send({
      statusCode: 200,
      message: "User successfully deleted",
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

export const userControllers = {
  findUser,
  createdUser,
  editUser,
  deleteUser,
};
