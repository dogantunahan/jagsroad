import configPromise from '@payload-config'
import { getPayload } from 'payload' 

import { baseProcedure, createTRPCRouter } from '@/trpc/init';

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
      const payload = await getPayload({
        config: configPromise,
      })

      const data = await payload.find({
        collection: 'categories',
        depth: 1, //? Populate subcategories, subcategories.[0] will be a type of "Category"
        pagination: false,
        where: {
          parent: {
            exists: false,
          },
        },
      })

      

    return [{ hellow: 'world' }]
  })
})