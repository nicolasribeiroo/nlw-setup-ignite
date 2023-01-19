import { FastifyInstance } from "fastify";
import { dayRouter } from "./day";
import { habitRouter } from "./habits";
import { summaryRouter } from "./summary";

export async function appRoutes(app: FastifyInstance) {
  app.register(dayRouter);
  app.register(habitRouter);
  app.register(summaryRouter);
}
