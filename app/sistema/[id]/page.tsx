import Link from "next/link";
import { notFound } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import SystemIcon from "@/components/SystemIcon";
import { artigosDoSistema, obterSistema, sistemas } from "@/lib/data";

export function generateStaticParams() {
  return sistemas.map((s) => ({ id: s.id }));
}

export default async function Sistema({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sistema = obterSistema(id);
  if (!sistema) notFound();
  const artigos = artigosDoSistema(id);

  return (
    <div className="px-4 pb-16">
      <div className="mx-auto mt-8 flex max-w-3xl justify-center">
        <SearchBar compacta />
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Central de Ajuda
          </Link>{" "}
          <span aria-hidden="true">›</span> {sistema.nome}
        </nav>

        <div className="mt-4 flex items-center gap-4">
          <SystemIcon icone={sistema.icone} cor={sistema.cor} tamanho={48} />
          <div>
            <h1 className="text-2xl text-gray-900">{sistema.nome}</h1>
            <p className="text-sm text-gray-600">{sistema.descricao}</p>
          </div>
        </div>

        <h2 className="mt-10 text-base font-semibold text-gray-900">
          Artigos e soluções ({artigos.length})
        </h2>
        <ul className="mt-2 divide-y divide-gray-100">
          {artigos.map((artigo) => (
            <li key={artigo.slug} className="py-4">
              <Link
                href={`/artigo/${artigo.slug}`}
                className="text-lg text-[#1351B4] underline-offset-2 hover:underline"
              >
                {artigo.titulo}
              </Link>
              <p className="mt-1 text-sm text-gray-600">{artigo.resumo}</p>
              {(artigo.videos?.length || artigo.prints?.length) && (
                <div className="mt-2 flex gap-2">
                  {artigo.videos?.length ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700">
                      ▶ vídeo
                    </span>
                  ) : null}
                  {artigo.prints?.length ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                      ⧉ captura de tela
                    </span>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>

        {artigos.length === 0 && (
          <p className="mt-4 text-sm text-gray-600">
            Ainda não há artigos para este sistema neste protótipo.
          </p>
        )}
      </div>
    </div>
  );
}
