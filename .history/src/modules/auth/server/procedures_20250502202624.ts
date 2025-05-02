import { Category } from '@/payload-types';

import { baseProcedure, createTRPCRouter } from '@/trpc/init';


export const authRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
      
  })
})