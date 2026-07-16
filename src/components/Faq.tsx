const faqs = [
  {
    question: 'Quelle est la durée minimale de location ?',
    answer:
      "Nos contrats sont proposés au mois, sans durée minimale d'engagement. Vous pouvez résilier avec un préavis d'un mois.",
  },
  {
    question: "Comment se passe l'accès à la cave ?",
    answer:
      "Selon l'immeuble, l'accès se fait par digicode, badge ou clé. Ces informations vous sont communiquées après signature du contrat.",
  },
  {
    question: 'Puis-je visiter avant de louer ?',
    answer:
      'Oui, une visite est systématiquement organisée avant toute signature de contrat.',
  },
  {
    question: 'Que puis-je stocker dans une cave CaveCity ?',
    answer:
      'Cartons, meubles, vélos, matériel saisonnier... Les produits dangereux, inflammables ou périssables sont interdits.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
        Questions fréquentes
      </h2>

      <div className="mt-10 divide-y divide-stone-200 border-t border-stone-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-stone-900 marker:content-none">
              {faq.question}
              <span className="ml-4 text-stone-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-stone-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
