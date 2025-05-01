import configPromise from '@payload-config'
import { getPayload } from 'payload' 

import { baseProcedure, createTRPCRouter } from '@/trpc/init';
import { CustomCategory } from '@/app/(app)/(home)/types';

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

      const formattedData: CustomCategory[] = data.docs.map((doc) => ({
          ...doc,
          subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            //! Because of "depth: 1" we are confident "doc" will be a type of "Category"
            ...(doc as Category),
            subcategories: undefined,
          })),
        }))

    return [{ hellow: 'world' }]
  })
})