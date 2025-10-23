import { courseRouter } from "./routers/course"
import { bookingRouter } from "./routers/booking"
import { reviewRouter } from "./routers/review"
import { noticeRouter } from "./routers/notice"
import { faqRouter } from "./routers/faq"
import { createCallerFactory, createTRPCRouter } from "./trpc"
import { scheduleRouter } from "./routers/schedule"
import { userRouter } from "./routers/user"

export const appRouter = createTRPCRouter({
  schedule: scheduleRouter,
  user: userRouter,

  //삭제 예정
  course: courseRouter,
  booking: bookingRouter,
  review: reviewRouter,
  notice: noticeRouter,
  faq: faqRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
