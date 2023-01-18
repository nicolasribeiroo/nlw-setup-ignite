import { FastifyInstance } from "fastify";
import { DayRoute } from "./day";

export async function dayRouter(app: FastifyInstance) {
  app.get("/day", DayRoute);
}
