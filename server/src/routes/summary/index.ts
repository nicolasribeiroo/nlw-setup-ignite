import { FastifyInstance } from "fastify";
import { SummaryHabits } from "./summary";

export async function summaryRouter(app: FastifyInstance) {
  app.get("/summary", SummaryHabits);
}
