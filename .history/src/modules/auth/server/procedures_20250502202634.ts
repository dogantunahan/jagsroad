import { Category } from '@/payload-types';

import { baseProcedure, createTRPCRouter } from '@/trpc/init';


export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
      
  })
})