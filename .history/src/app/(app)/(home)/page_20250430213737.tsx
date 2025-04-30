import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default function Home({ data }: { data: any }) {
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export async function getServerSideProps() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
  })

  return {
    props: {
      data,
    },
  }
}
