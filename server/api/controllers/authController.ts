import { errors } from "@vinejs/vine";
import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import { FindUserByEmailService } from "../services/UserService";
import { verifyPassword } from "../utils/bcrypt";
import { loginSchema } from "../utils/vinejs";

const SECRET_KEY = process.env.SECRET_KEY as string;

const login = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const { auth } = await loginSchema(email, password);

    const findUser = new FindUserByEmailService();
    const user = await findUser.execute(email);

    if (!user) {
      return reply.status(401).send({
        statusCode: 401,
        message: "User not found",
        data: { email },
      });
    }

    const validationPassword = await verifyPassword(
      auth.password,
      user.password
    );

    if (!validationPassword) {
      return reply.status(401).send({
        statusCode: 401,
        message: "Not authorized",
      });
    }

    const token = jwt.sign({ name: user.name }, SECRET_KEY, {
      expiresIn: "1h",
    });

    return reply.status(200).send({
      statusCode: 200,
      message: "Login successfully",
      data: {
        token,
        id: user.id,
      },
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return reply.status(400).send({ error: error.messages[0].message });
    }

    const { message } = error as { message: string };

    return reply.status(500).send({ error: message });
  }
};

export const authControllers = {
  login,
};
