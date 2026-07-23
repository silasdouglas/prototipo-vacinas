import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
      <button
        aria-label="Menu"
        className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1351B4] text-sm font-bold text-white">
          S
        </span>
        <span className="text-lg text-gray-700">
          Central de Ajuda <span className="font-semibold text-[#1351B4]">Saúde Digital</span>
        </span>
      </Link>
      <div className="ml-auto flex items-center gap-3">
        <a
          href="https://www.gov.br/saude"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1 text-sm text-gray-600 hover:text-[#1351B4] sm:flex"
        >
          gov.br/saude
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14 4h6v6M20 4l-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
          U
        </span>
      </div>
    </header>
  );
}
