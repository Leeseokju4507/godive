import { createCallerFactory, createTRPCRouter } from "@/src/server/api/trpc"
import { courseRouter } from "./routers/course"
import { bookingRouter } from "./routers/booking"
import { reviewRouter } from "./routers/review"
import { noticeRouter } from "./routers/notice"
import { faqRouter } from "./routers/faq"

export const appRouter = createTRPCRouter({
  course: courseRouter,
  booking: bookingRouter,
  review: reviewRouter,
  notice: noticeRouter,
  faq: faqRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
