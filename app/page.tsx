import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SystemIcon from "@/components/SystemIcon";
import { sistemas, buscasPopulares } from "@/lib/data";

export default function Home() {
  return (
    <div className="px-4 pb-16">
      {/* herói */}
      <section className="mx-auto flex max-w-3xl flex-col items-center pt-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1351B4] text-xl font-bold text-white shadow-sm">
          S
        </span>
        <h1 className="mt-5 text-3xl font-normal text-[#1351B4] sm:text-4xl">
          Como podemos ajudar?
        </h1>
        <div className="mt-7 w-full max-w-xl">
          <SearchBar autoFocus />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-gray-500">Buscas frequentes:</span>
          {buscasPopulares.map((b) => (
            <Link
              key={b}
              href={`/busca?q=${encodeURIComponent(b)}`}
              className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-[#1351B4] hover:text-[#1351B4]"
            >
              {b}
            </Link>
          ))}
        </div>
      </section>

      {/* grade de sistemas */}
      <section className="mx-auto mt-14 max-w-4xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sistemas.map((s) => (
            <Link
              key={s.id}
              href={`/sistema/${s.id}`}
              className="group flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-7 text-center transition hover:border-gray-300 hover:shadow-md"
            >
              <SystemIcon icone={s.icone} cor={s.cor} tamanho={44} />
              <span className="text-sm font-medium text-gray-800 group-hover:text-[#1351B4]">
                {s.nome}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* seções de apoio */}
      <section className="mx-auto mt-16 max-w-4xl border-t border-gray-200 pt-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Seu acesso</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/artigo/govbr-nivel-conta" className="text-[#1351B4] underline-offset-2 hover:underline">
                  Não consegue entrar com a conta gov.br?
                </Link>
              </li>
              <li>
                <Link href="/artigo/scpa-perfil-pendente" className="text-[#1351B4] underline-offset-2 hover:underline">
                  Solicitação de perfil pendente no SCPA
                </Link>
              </li>
              <li>
                <Link href="/artigo/pec-recuperar-senha-instalador" className="text-[#1351B4] underline-offset-2 hover:underline">
                  Recuperar senha do instalador do PEC
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Comunidade e suporte</h2>
            <p className="mt-3 text-sm text-gray-600">
              Dúvidas de uso podem ser abertas com o suporte do e-SUS APS pelo{" "}
              <a
                href="https://esusaps.freshdesk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1351B4] underline-offset-2 hover:underline"
              >
                portal de chamados
              </a>{" "}
              ou com o núcleo de TI do seu município.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Painel de status</h2>
            <p className="mt-3 text-sm text-gray-600">
              Se um sistema estiver fora do ar agora, pode ser instabilidade nacional. Verifique a
              disponibilidade nos canais do{" "}
              <a
                href="https://datasus.saude.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1351B4] underline-offset-2 hover:underline"
              >
                DATASUS
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
