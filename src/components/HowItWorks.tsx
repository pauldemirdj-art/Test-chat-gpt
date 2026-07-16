const steps = [
  {
    number: '01',
    title: 'Trouvez votre cave',
    description:
      "Parcourez les caves disponibles par arrondissement, surface et budget.",
  },
  {
    number: '02',
    title: 'Envoyez votre demande',
    description:
      'Remplissez le formulaire avec vos besoins. Notre équipe vous recontacte sous 24h.',
  },
  {
    number: '03',
    title: 'Visitez et signez',
    description:
      'Nous organisons une visite, puis un contrat de location simple et sans engagement long.',
  },
  {
    number: '04',
    title: 'Stockez en toute tranquillité',
    description:
      'Récupérez vos clés ou badge d\'accès et profitez de votre espace dès la signature.',
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
          Comment ça marche
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Louer une cave avec CaveCity, c'est simple et rapide.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-sm font-semibold text-amber-700">
                {step.number}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
