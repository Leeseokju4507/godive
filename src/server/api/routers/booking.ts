import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const bookingRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        courseId: z.string(),
        scheduleId: z.string(),
        notes: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const course = await ctx.db.course.findUnique({
        where: { id: input.courseId },
      })

      if (!course) {
        throw new Error("Course not found")
      }

      return ctx.db.booking.create({
        data: {
          userId: ctx.session.user.id,
          courseId: input.courseId,
          scheduleId: input.scheduleId,
          totalPrice: course.price,
          notes: input.notes,
        },
        include: {
          course: true,
          schedule: true,
        },
      })
    }),

  getMyBookings: protectedProcedure.query(({ ctx }) => {
    return ctx.db.booking.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        course: true,
        schedule: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  }),
})
