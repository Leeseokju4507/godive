import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const scheduleRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ ctx, input }) => {
      const data = await ctx.db.schedule.findMany(); 
      return data;
    }),

  create: publicProcedure
    .input(z.object({
      title: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      color: z.string(),
    }))
    .mutation(async ({ctx, input}) => {
      await ctx.db.schedule.create({
        data:{
          title: input.title,
          startDate: input.startDate,
          endDate: input.endDate,
          color: input.color
        }
      })
      return true;
    }),
  
  update: publicProcedure
    .input(z.object({
      id: z.string().optional(),
      title: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      color: z.string(),
    }))
    .mutation(async ({ctx, input}) => {
      if(!input.id){
        return false;
      }
      await ctx.db.schedule.update({
        where:{
          id: input.id
        },
        data:{
          title: input.title,
          startDate: input.startDate,
          endDate: input.endDate,
          color: input.color
        }
      })
      return true;
    }),

    delete: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.schedule.delete({ where: { id: input } })
      return true
    })


})
