import dynamic from 'next/dynamic'
const TestimonyForm = dynamic(() => import('../components/TestimonyForm'), { ssr: false })

export default function Home() {
  return (
    <div>
      <head>
        <title>Témoignages Hitsufilm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div>
        <TestimonyForm />
      </div>
    </div>
  );
}
