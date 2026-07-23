"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { buscarArtigos, obterSistema, type Artigo } from "@/lib/data";

export default function SearchBar({
  inicial = "",
  autoFocus = false,
  compacta = false,
}: {
  inicial?: string;
  autoFocus?: boolean;
  compacta?: boolean;
}) {
  const router = useRouter();
  const [consulta, setConsulta] = useState(inicial);
  const [sugestoes, setSugestoes] = useState<Artigo[]>([]);
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState(-1);
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fechar = (e: MouseEvent) => {
      if (caixa.current && !caixa.current.contains(e.target as Node)) setAberto(false);
    };
    document.addEventListener("mousedown", fechar);
    return () => document.removeEventListener("mousedown", fechar);
  }, []);

  function aoDigitar(valor: string) {
    setConsulta(valor);
    setAtivo(-1);
    if (valor.trim().length >= 2) {
      setSugestoes(buscarArtigos(valor).slice(0, 6));
      setAberto(true);
    } else {
      setSugestoes([]);
      setAberto(false);
    }
  }

  function enviar(e?: React.FormEvent) {
    e?.preventDefault();
    if (ativo >= 0 && sugestoes[ativo]) {
      router.push(`/artigo/${sugestoes[ativo].slug}`);
      setAberto(false);
      return;
    }
    if (consulta.trim()) {
      router.push(`/busca?q=${encodeURIComponent(consulta.trim())}`);
      setAberto(false);
    }
  }

  function aoTeclar(e: React.KeyboardEvent) {
    if (!aberto || sugestoes.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setAtivo((a) => (a + 1) % sugestoes.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setAtivo((a) => (a <= 0 ? sugestoes.length - 1 : a - 1));
    } else if (e.key === "Escape") {
      setAberto(false);
    }
  }

  return (
    <div ref={caixa} className={`relative w-full ${compacta ? "max-w-2xl" : "max-w-xl"}`}>
      <form onSubmit={enviar} role="search">
        <div
          className={`flex items-center gap-3 rounded-full border border-gray-300 bg-white px-5 shadow-sm transition focus-within:border-[#1351B4] focus-within:shadow-md ${
            compacta ? "py-2.5" : "py-3.5"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gray-500" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={consulta}
            onChange={(e) => aoDigitar(e.target.value)}
            onKeyDown={aoTeclar}
            onFocus={() => consulta.trim().length >= 2 && setAberto(true)}
            placeholder="Descreva o problema ou erro"
            autoFocus={autoFocus}
            className="w-full bg-transparent text-base text-gray-800 outline-none placeholder:text-gray-500"
            aria-label="Buscar na central de ajuda"
            aria-expanded={aberto}
            role="combobox"
            aria-controls="sugestoes-busca"
          />
          {consulta && (
            <button
              type="button"
              aria-label="Limpar busca"
              onClick={() => aoDigitar("")}
              className="shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </form>

      {aberto && sugestoes.length > 0 && (
        <ul
          id="sugestoes-busca"
          role="listbox"
          className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white py-2 shadow-lg"
        >
          {sugestoes.map((artigo, i) => {
            const sistema = obterSistema(artigo.sistemaId);
            return (
              <li key={artigo.slug} role="option" aria-selected={i === ativo}>
                <Link
                  href={`/artigo/${artigo.slug}`}
                  onClick={() => setAberto(false)}
                  onMouseEnter={() => setAtivo(i)}
                  className={`flex items-start gap-3 px-5 py-2.5 ${
                    i === ativo ? "bg-gray-100" : ""
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-gray-400" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="min-w-0">
                    <span className="block truncate text-sm text-gray-800">{artigo.titulo}</span>
                    <span className="block text-xs text-gray-500">{sistema?.nome}</span>
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="mt-1 border-t border-gray-100 pt-1">
            <button
              onClick={() => enviar()}
              className="flex w-full items-center gap-2 px-5 py-2 text-sm text-[#1351B4] hover:bg-gray-50"
            >
              Ver todos os resultados para “{consulta.trim()}”
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
