import { z } from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

export const reviewRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        courseId: z.string().optional(),
        limit: z.number().min(1).max(100).default(10),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.review.findMany({
        where: {
          isPublic: true,
          ...(input.courseId && { courseId: input.courseId }),
        },
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
          course: {
            select: {
              title: true,
              titleKo: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: input.limit,
      })
    }),

  create: protectedProcedure
    .input(
      z.object({
        courseId: z.string().optional(),
        rating: z.number().min(1).max(5),
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.review.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      })
    }),
})
