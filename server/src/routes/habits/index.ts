import { FastifyInstance } from "fastify";
import { HabitRoute } from "./habits";

export async function habitRouter(app: FastifyInstance) {
  app.post("/habits", HabitRoute);
}
