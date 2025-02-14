import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: ''
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold">Témoignages</h1>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-2 border rounded mb-2"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
