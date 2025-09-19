import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const noticeRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.notice.findMany({
        where: {
          isPublic: true,
        },
        orderBy: [{ isPinned: "desc" }, { createdAt: "desc" }],
        take: input.limit,
      })
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.db.notice.findUnique({
      where: { id: input.id },
    })
  }),
})
