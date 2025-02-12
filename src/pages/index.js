import Head from 'next/head'
import TestimonyForm from '../components/TestimonyForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Témoignages Hitsufilm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TestimonyForm />
    </div>
  )
}
