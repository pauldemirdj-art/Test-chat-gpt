const advantages = [
  {
    title: 'Sans engagement long',
    description: 'Location au mois, résiliable à tout moment avec un simple préavis.',
  },
  {
    title: 'Sécurisées',
    description: 'Portes individuelles, digicodes et parfois vidéosurveillance selon les immeubles.',
  },
  {
    title: 'Proches de chez vous',
    description: 'Des caves réparties dans la plupart des arrondissements parisiens.',
  },
  {
    title: 'Prix transparents',
    description: 'Un loyer mensuel tout compris, sans frais cachés ni dépôt de garantie excessif.',
  },
];

export default function Advantages() {
  return (
    <section id="avantages" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
        Pourquoi passer par CaveCity
      </h2>
      <p className="mt-3 max-w-2xl text-stone-600">
        Nous gérons un parc de caves vacantes à Paris pour le compte de
        propriétaires institutionnels. Toutes nos caves sont vérifiées avant
        mise en location.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-stone-200 bg-white p-6"
          >
            <h3 className="text-base font-semibold text-stone-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-stone-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
