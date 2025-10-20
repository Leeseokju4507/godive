import { courseRouter } from "./routers/course"
import { bookingRouter } from "./routers/booking"
import { reviewRouter } from "./routers/review"
import { noticeRouter } from "./routers/notice"
import { faqRouter } from "./routers/faq"
import { createCallerFactory, createTRPCRouter } from "./trpc"
import { calendarRouter } from "./routers/calendar"

export const appRouter = createTRPCRouter({
  calendar: calendarRouter,
  //삭제 예정
  course: courseRouter,
  booking: bookingRouter,
  review: reviewRouter,
  notice: noticeRouter,
  faq: faqRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
