export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CaveCity. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#annonces" className="hover:text-stone-700">
            Caves disponibles
          </a>
          <a href="#contact" className="hover:text-stone-700">
            Contact
          </a>
          <a href="#faq" className="hover:text-stone-700">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
