import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: [
    // { emit: "stdout", level: "query" },
    { emit: "stdout", level: "info" },
    // { emit: "stdout", level: "warn" },
    { emit: "stdout", level: "error" },
  ],
});
