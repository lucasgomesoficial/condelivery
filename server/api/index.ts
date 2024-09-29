import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const server = fastify();

server.register(cors, {
  origin: "*",
});

server.register(routes);

server.listen(
  { port: Number(process.env.PORT), host: "0.0.0.0" },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  }
);
