import { appRouter } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export async function GET(request: Request) {
  return fetchRequestHandler({
    router: appRouter,
    createContext: () => createTRPCContext({ req: request }),
    req: request,
    endpoint: '/api/trpc',
  });
}

export async function POST(request: Request) {
  return fetchRequestHandler({
    router: appRouter,
    createContext: () => createTRPCContext({ req: request }),
    req: request,
    endpoint: '/api/trpc',
  });
}
