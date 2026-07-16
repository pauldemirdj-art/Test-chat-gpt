export default function Header() {
  const navLink =
    'text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors';

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-sm font-bold text-white">
            CC
          </span>
          <span className="text-lg font-semibold tracking-tight text-stone-900">
            CaveCity
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#annonces" className={navLink}>
            Caves disponibles
          </a>
          <a href="#comment-ca-marche" className={navLink}>
            Comment ça marche
          </a>
          <a href="#avantages" className={navLink}>
            Pourquoi CaveCity
          </a>
          <a href="#faq" className={navLink}>
            FAQ
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
        >
          Trouver une cave
        </a>
      </div>
    </header>
  );
}
