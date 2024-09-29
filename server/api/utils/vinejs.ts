import vine from "@vinejs/vine";
import { IUpdateOrder, IUser } from "../types";

const roleUser = ["User", "Collaborator", "Admin"];

export const updateOrderSchema = async (body: IUpdateOrder) => {
  const bodySchema = vine.object({
    orderId: vine.string().uuid(),
    roleUser: vine.string().in(roleUser),
  });

  const validator = vine.compile(bodySchema);
  const updateOrderBody = await validator.validate(body);

  return { updateOrderBody };
};

export const userSchema = async (body: IUser) => {
  const bodySchema = vine.object({
    email: vine.string().email(),
    password: vine.string().confirmed({
      confirmationField: "confirmPassword",
    }),
    name: vine.string().optional(),
    idDocument: vine.string().optional(),
    phoneNumber: vine.string().optional(),
    idCondominium: vine.string().optional(),
    block: vine.string().optional(),
    apartment: vine.string().optional(),
    role: vine.string().in(roleUser),
  });

  const validator = vine.compile(bodySchema);
  const userBody = await validator.validate(body);

  return { userBody };
};

export const loginSchema = async (email: string, password: string) => {
  const bodySchema = vine.object({
    email: vine.string().email(),
    password: vine.string(),
  });

  const body = {
    email,
    password,
  };

  const validator = vine.compile(bodySchema);
  const auth = await validator.validate(body);

  return { auth };
};
