import { useState, type FormEvent } from 'react';

const arrondissements = [
  'Peu importe',
  '9e',
  '11e',
  '13e',
  '15e',
  '18e',
  '20e',
  'Autre',
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: brancher sur l'API / CRM de collecte de leads.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-stone-200 bg-stone-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div className="text-white">
          <h2 className="text-3xl font-semibold tracking-tight">
            Une cave vous intéresse ?
          </h2>
          <p className="mt-3 max-w-md text-stone-300">
            Laissez-nous vos coordonnées et vos besoins, notre équipe vous
            recontacte sous 24h avec les adresses et disponibilités
            correspondantes.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-stone-300">
            <li>· Réponse sous 24h ouvrées</li>
            <li>· Aucun engagement de votre part</li>
            <li>· Visite organisée avant signature</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <p className="text-lg font-semibold text-stone-900">
                Merci, votre demande a bien été envoyée !
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Un membre de notre équipe vous recontacte très prochainement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Prénom" name="firstName" required />
                <Field label="Nom" name="lastName" required />
              </div>

              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="phone" type="tel" required />

              <div>
                <label
                  htmlFor="arrondissement"
                  className="mb-1 block text-sm font-medium text-stone-700"
                >
                  Arrondissement souhaité
                </label>
                <select
                  id="arrondissement"
                  name="arrondissement"
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-500 focus:outline-none"
                >
                  {arrondissements.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-stone-700"
                >
                  Votre besoin (surface, usage, budget...)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
              >
                Envoyer ma demande
              </button>

              <p className="text-xs text-stone-500">
                En soumettant ce formulaire, vous acceptez d'être recontacté
                par CaveCity au sujet de votre demande.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-stone-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-500 focus:outline-none"
      />
    </div>
  );
}
