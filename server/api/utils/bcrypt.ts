import bcrypt from "bcrypt";

export const createdHashPassword = async (senha: string) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(senha, saltRounds);
  return hash;
};

export const verifyPassword = async (senha: string, hash: string) => {
  const match = await bcrypt.compare(senha, hash);
  return match;
};
