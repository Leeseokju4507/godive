import { z } from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

export const courseRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        category: z.enum(["COURSE", "TRAINING", "TOUR"]).optional(),
        level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).optional(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.course.findMany({
        where: {
          isActive: true,
          ...(input.category && { category: input.category }),
          ...(input.level && { level: input.level }),
        },
        include: {
          schedules: {
            where: {
              startDate: {
                gte: new Date(),
              },
            },
            orderBy: {
              startDate: "asc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.db.course.findUnique({
      where: { id: input.id },
      include: {
        schedules: {
          where: {
            startDate: {
              gte: new Date(),
            },
          },
          orderBy: {
            startDate: "asc",
          },
        },
      },
    })
  }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        titleKo: z.string().min(1),
        description: z.string().min(1),
        price: z.number().positive(),
        duration: z.number().positive(),
        maxStudents: z.number().positive(),
        level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
        category: z.enum(["COURSE", "TRAINING", "TOUR"]),
        imageUrl: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.course.create({
        data: input,
      })
    }),
})
