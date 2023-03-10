import dayjs from "dayjs";
import { FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function CreateHabit(req: FastifyRequest) {
  const createHabitBody = z.object({
    title: z.string(),
    weekDays: z.array(z.number().min(0).max(6)),
  });

  const { title, weekDays } = createHabitBody.parse(req.body);

  const day = dayjs().startOf("day").toDate();

  await prisma.habit.create({
    data: {
      title,
      created_at: day,
      weekDays: {
        create: weekDays.map((day) => {
          return { week_day: day };
        }),
      },
    },
  });
}
