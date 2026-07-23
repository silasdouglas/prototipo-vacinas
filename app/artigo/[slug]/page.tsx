import Link from "next/link";
import { notFound } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import SystemIcon from "@/components/SystemIcon";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { artigos, artigosDoSistema, obterArtigo, obterSistema } from "@/lib/data";

export function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }));
}

export default async function Artigo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artigo = obterArtigo(slug);
  if (!artigo) notFound();
  const sistema = obterSistema(artigo.sistemaId);
  const relacionados = artigosDoSistema(artigo.sistemaId)
    .filter((a) => a.slug !== artigo.slug)
    .slice(0, 3);

  return (
    <div className="px-4 pb-16">
      <div className="mx-auto mt-8 flex max-w-3xl justify-center">
        <SearchBar compacta />
      </div>

      <article className="mx-auto mt-10 max-w-3xl">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Central de Ajuda
          </Link>{" "}
          <span aria-hidden="true">›</span>{" "}
          <Link href={`/sistema/${artigo.sistemaId}`} className="hover:underline">
            {sistema?.nome}
          </Link>
        </nav>

        <h1 className="mt-4 text-2xl text-gray-900 sm:text-3xl">{artigo.titulo}</h1>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          {sistema && <SystemIcon icone={sistema.icone} cor={sistema.cor} tamanho={16} />}
          <span>{sistema?.nome}</span>
          <span aria-hidden="true">·</span>
          <span>atualizado em {artigo.atualizadoEm}</span>
        </div>

        <p className="mt-5 text-base text-gray-700">{artigo.resumo}</p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">Possíveis causas</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-700">
            {artigo.causas.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">Como resolver</h2>
          <ol className="mt-3 space-y-3">
            {artigo.passos.map((p, i) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1351B4] text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ol>
        </section>

        {artigo.prints && artigo.prints.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Capturas de tela</h2>
            <div className="mt-3 grid gap-5 sm:grid-cols-1">
              {artigo.prints.map((print) => (
                <figure key={print.src} className="overflow-hidden rounded-lg border border-gray-200">
                  <a href={print.src} target="_blank" rel="noopener noreferrer" title="Abrir em tamanho real">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={print.src}
                      alt={print.legenda}
                      loading="lazy"
                      className="w-full bg-gray-50 transition hover:opacity-95"
                    />
                  </a>
                  <figcaption className="border-t border-gray-100 px-4 py-2.5 text-xs text-gray-500">
                    {print.legenda}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {artigo.videos && artigo.videos.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Vídeos de apoio</h2>
            <div className="mt-3 grid gap-5 sm:grid-cols-2">
              {artigo.videos.map((video) => (
                <YouTubeEmbed key={video.youtubeId} video={video} />
              ))}
            </div>
          </section>
        )}

        {artigo.observacao && (
          <aside className="mt-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Atenção:</strong> {artigo.observacao}
          </aside>
        )}

        <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-medium text-gray-800">Isso resolveu seu problema?</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:border-[#1351B4] hover:text-[#1351B4]">
              Sim
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:border-[#1351B4] hover:text-[#1351B4]">
              Não, preciso de mais ajuda
            </button>
          </div>
        </section>

        {relacionados.length > 0 && (
          <section className="mt-10">
            <h2 className="text-base font-semibold text-gray-900">Artigos relacionados</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {relacionados.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/artigo/${a.slug}`}
                    className="text-[#1351B4] underline-offset-2 hover:underline"
                  >
                    {a.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
}
