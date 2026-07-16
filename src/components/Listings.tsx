import { listings } from '../data/listings';

export default function Listings() {
  return (
    <section id="annonces" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
          Caves disponibles à la location
        </h2>
        <p className="mt-3 text-stone-600">
          Une sélection de caves réparties dans plusieurs arrondissements
          parisiens. Adresses affichées à titre indicatif — l'adresse exacte
          vous est communiquée après validation de votre demande.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <article
            key={listing.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6"
                />
              </svg>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                {listing.arrondissement}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-stone-900">
                {listing.title}
              </h3>
              <p className="mt-1 text-sm text-stone-500">{listing.address}</p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-stone-600">
                <p>
                  <span className="font-medium text-stone-900">
                    {listing.surface} m²
                  </span>{' '}
                  surface
                </p>
                <p>
                  <span className="font-medium text-stone-900">
                    {listing.headroom}
                  </span>{' '}
                  hauteur
                </p>
              </div>

              <p className="mt-2 text-sm text-stone-500">{listing.access}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                <p className="text-lg font-semibold text-stone-900">
                  {listing.price} €<span className="text-sm font-normal text-stone-500">/mois</span>
                </p>
                <a
                  href="#contact"
                  className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
                >
                  Je suis intéressé
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
