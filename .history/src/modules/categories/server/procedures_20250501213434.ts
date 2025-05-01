import configPromise from '@payload-config'
import { getPayload } from 'payload' 

import { baseProcedure, createTRPCRouter } from '@/trpc/init';

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const payload = await getPayload({
        config: configPromise,
      })

    })


    return [{ hellow: 'world' }]
  })
})