import { headers as getHeaders } from 'next/headers'
import z from 'zod'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders()

    const session = await ctx.db.auth({ headers })

    return session
  }),

  register: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        username: z
            .string()
            //? [username].shop.com
      })
    )
    .mutation()
})
