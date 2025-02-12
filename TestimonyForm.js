import dynamic from 'next/dynamic'
import React from 'react'

const TestimonyForm = () => {
  const [formData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    age: '',
    profession: '',
    ville: '',
    telephone: '',
    histoire: '',
    email: '',
    certification_verite: false,
    autorise_contact: false
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Partagez votre témoignage
          </h1>
          <p className="text-xl text-center text-gray-600 mb-6 italic">
            "Donnez une voix à votre histoire avec hitsufilm"
          </p>
          
          <p className="text-sm text-gray-500 mb-4">* Les champs marqués d'un astérisque sont obligatoires</p>
          
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Merci pour votre témoignage ! Nous vous contacterons bientôt.
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/mbldknqz"
              method="POST"
              className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Prénom *</label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.prenom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.nom}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Âge *</label>
                  <input
                    type="number"
                    name="age"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Profession (optionnel)</label>
                  <input
                    type="text"
                    name="profession"
                    className="w-full p-2 border rounded"
                    value={formData.profession}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Ville *</label>
                  <input
                    type="text"
                    name="ville"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.ville}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Votre histoire *</label>
                <textarea
                  name="histoire"
                  required
                  className="w-full p-2 border rounded h-32"
                  value={formData.histoire}
                  onChange={handleChange}
                  placeholder="Racontez brièvement votre histoire..."
                />
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="autorise_contact"
                  id="autorise_contact"
                  className="w-4 h-4"
                  required
                  checked={formData.autorise_contact}
                  onChange={(e) => setFormData({...formData, autorise_contact: e.target.checked})}
                />
                <label htmlFor="autorise_contact" className="text-sm">
                  J'autorise hitsufilm à me contacter pour réaliser ce témoignage
                </label>
              </div>

              <div className="flex items-start space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="certification_verite"
                  id="certification_verite"
                  className="w-4 h-4 mt-1"
                  required
                  checked={formData.certification_verite}
                  onChange={(e) => setFormData({...formData, certification_verite: e.target.checked})}
                />
                <label htmlFor="certification_verite" className="text-sm">
                  Je soussigné(e), {formData.prenom} {formData.nom}, certifie que l'histoire que je m'apprête à raconter est authentique et exempte de toute fausse déclaration ou mensonge. Conformément à l'<strong>article 441-1 du Code pénal</strong>, « constitue un faux toute altération frauduleuse de la vérité de nature à causer un préjudice et accomplie par quelque moyen que ce soit ». Toute fausse déclaration volontaire peut engager ma responsabilité.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Envoyer mon témoignage
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TestimonyForm), {
  ssr: false
})
