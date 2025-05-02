import { headers as getHeaders, cookies as getCookies } from 'next/headers'
import z from 'zod'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import { AUTH_COOKIE } from '../constants'

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
        password: z.string(),
        username: z
          .string()
          .min(3, 'Username must be at least 3 characters')
          .max(64, 'Username must be at most 64 characters')
          .regex(
            /^[a-z0-9][-a-z0-9]*[a-z0-9]$/,
            'Username can only contain lowercase letters, numbers and hyphens. It must start end with a letter or number'
          )
          .refine(
            (val) => !val.includes('--'),
            'Username cannot contain two consecutive hyphens'
          )
          .transform((val) => val.toLowerCase()), //? [username(Lower Case)].shop.com
        //? [username].shop.com
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.create({
        collection: 'users',
        data: {
          email: input.email,
          username: input.username,
          password: input.password, //! This will be hashed in the database
        },
      })
    }),
  //? Login Part
  login: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.db.login({
        collection: 'users',
        data: {
          email: input.email,
          password: input.password,
        },
      })

      if (!data.token) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Failed to login',
        })
      }

      const cookies = await getCookies()
      cookies.set({
        name: AUTH_COOKIE,
        value: data.token,
        httpOnly: true,
        path: "/",
        // TODO: Ensure cross-domain cookie sharing
        //! sameSite: "none",
        //! domain: "",
        //? funroad.com // initial cookie
        //? jagshem.funroad.com // subdomain cookie // cookie does not exist here
      })

      return data;
    }),
})
