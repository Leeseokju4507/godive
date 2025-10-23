import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const userRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({
      id: z.string(),
      password: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const data = await ctx.db.user.findFirst({
        where:{
            id: input.id,
            password: input.password
        }
      }); 
        return data;
    }),
})
