import { z } from 'zod'

export const registerSchema = z.object({
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
