import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SystemIcon from "@/components/SystemIcon";
import { buscarArtigos, obterSistema } from "@/lib/data";

export const metadata = { title: "Resultados da busca — Central de Ajuda Saúde Digital" };

export default async function Busca({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const resultados = buscarArtigos(q);

  return (
    <div className="px-4 pb-16">
      <div className="mx-auto mt-8 flex max-w-3xl justify-center">
        <SearchBar inicial={q} compacta />
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <p className="text-sm text-gray-500">
          {resultados.length > 0
            ? `${resultados.length} resultado${resultados.length > 1 ? "s" : ""} para “${q}”`
            : `Nenhum resultado para “${q}”`}
        </p>

        <ul className="mt-4 divide-y divide-gray-100">
          {resultados.map((artigo) => {
            const sistema = obterSistema(artigo.sistemaId);
            return (
              <li key={artigo.slug} className="py-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {sistema && <SystemIcon icone={sistema.icone} cor={sistema.cor} tamanho={16} />}
                  <span>{sistema?.nome}</span>
                  <span aria-hidden="true">·</span>
                  <span>atualizado em {artigo.atualizadoEm}</span>
                </div>
                <Link
                  href={`/artigo/${artigo.slug}`}
                  className="mt-1 block text-lg text-[#1351B4] underline-offset-2 hover:underline"
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
            );
          })}
        </ul>

        {resultados.length === 0 && (
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
            <p className="font-medium text-gray-800">Dicas para melhorar a busca:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use palavras-chave do erro (ex.: “lote não enviado”, “certificado vencido”).</li>
              <li>Inclua o nome do sistema (PEC, SI-PNI, CNES, CADSUS...).</li>
              <li>
                Ou navegue pelos{" "}
                <Link href="/" className="text-[#1351B4] hover:underline">
                  sistemas na página inicial
                </Link>
                .
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
