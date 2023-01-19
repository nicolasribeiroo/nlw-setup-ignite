import { FastifyInstance } from "fastify";
import { CreateHabit } from "./habits";
import { HabitToggle } from "./toggle";

export async function habitRouter(app: FastifyInstance) {
  app.post("/habits", CreateHabit);
  app.patch("/habits/:id/toggle", HabitToggle);
}
