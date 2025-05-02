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
        password: z.string().min(8, "Password must be at least 8 characters"),
        username: z
            .string()
            .min(3, "Username must be at least 3 characters")
            .max(64, "Username must be at most 64 characters")
            .regex(
              /
            )
            //? [username].shop.com
      })
    )
    .mutation()
})
