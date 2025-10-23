import { initTRPC, TRPCError } from "@trpc/server"
import { type Session } from "next-auth"
import superjson from "superjson"
import { ZodError } from "zod"
import { db } from "../db"
import { getToken } from "next-auth/jwt"

export const createTRPCContext = async (opts: { req: Request }) => {
  // 브라우저 Request에서 쿠키 가져오기
  const cookie = opts.req.headers.get("cookie") ?? "";

  // getToken 호출 시 NextApiRequest 최소 형태 제공
  const session = await getToken({
    req: { headers: { cookie } } as any, // 타입 강제
    secret: process.env.NEXTAUTH_SECRET,
  });

  return { session, db };
};
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createCallerFactory = t.createCallerFactory
export const createTRPCRouter = t.router

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now()
  if (t._config.isDev) {
    const waitMs = Math.floor(Math.random() * 400) + 100
    await new Promise((resolve) => setTimeout(resolve, waitMs))
  }

  const result = await next()

  if (t._config.isDev) {
    const end = Date.now()
    console.log(`[tRPC] ${path} took ${end - start}ms to execute`)
  }

  return result
})

export const publicProcedure = t.procedure.use(timingMiddleware)

export const protectedProcedure = t.procedure.use(timingMiddleware).use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})
