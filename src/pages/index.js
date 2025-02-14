import dynamic from 'next/dynamic';
import Head from 'next/head';

const TestimonyForm = dynamic(() => import('../components/TestimonyForm'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-6">
          <h1 className="text-xl text-center">Chargement du formulaire...</h1>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Témoignages Hitsufilm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TestimonyForm />
    </>
  );
}
