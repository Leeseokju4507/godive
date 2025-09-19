import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const faqRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.fAQ.findMany({
        where: {
          isPublic: true,
          ...(input.category && { category: input.category }),
        },
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      })
    }),
})
