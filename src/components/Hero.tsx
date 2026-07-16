import CaveIllustration from './CaveIllustration';

export default function Hero() {
  return (
    <section id="top" className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            Paris · Caves disponibles dès maintenant
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Louez une cave de stockage à Paris, en quelques clics.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-stone-600">
            CaveCity met en relation les Parisiens à la recherche d'espace
            supplémentaire avec des caves sèches, sécurisées et disponibles
            immédiatement, réparties dans tout Paris.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#annonces"
              className="rounded-lg bg-stone-900 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-stone-700"
            >
              Voir les caves disponibles
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-stone-300 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-800 transition-colors hover:border-stone-400"
            >
              Être recontacté
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
            <div>
              <dt className="text-2xl font-semibold text-stone-900">120+</dt>
              <dd className="text-sm text-stone-500">caves à Paris</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-stone-900">24h</dt>
              <dd className="text-sm text-stone-500">délai de réponse</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-stone-900">Dès 28€</dt>
              <dd className="text-sm text-stone-500">par mois</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
            <CaveIllustration variant={2} className="h-full w-full" />
          </div>
          <div className="absolute inset-x-6 bottom-6 rounded-xl border border-stone-200 bg-white p-5 shadow-lg">
            <p className="text-sm font-semibold text-stone-900">
              Cave voûtée · 15e arrondissement
            </p>
            <p className="mt-1 text-sm text-stone-500">
              10 m² · 70 €/mois · Disponible immédiatement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
