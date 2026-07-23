import type { Sistema } from "@/lib/data";

const paths: Record<Sistema["icone"], React.ReactNode> = {
  pec: (
    // prontuário / documento com cruz
    <>
      <path d="M7 3h7l4 4v14H7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3v4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12.5 10v6M9.5 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  sipni: (
    // seringa
    <>
      <path d="M18.5 5.5l-2-2M20 7l-3-3M6.5 17.5L4 20M14.8 5.2l4 4-8.3 8.3-4-4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M9.5 11.5l1.5 1.5M11.5 9.5l1.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  esus: (
    // pin de território
    <>
      <path d="M12 21s-6.5-5.6-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.4-6.5 10-6.5 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  cnes: (
    // prédio de saúde
    <>
      <path d="M4 20h16M6 20V8l6-4 6 4v12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M12 10v5M9.5 12.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  cadsus: (
    // cartão de identificação
    <>
      <rect x="3.5" y="6" width="17" height="12.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.5" cy="11" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 15.8c.6-1.4 1.5-2 2.5-2s1.9.6 2.5 2M13.5 10.5h4M13.5 13.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  rnds: (
    // rede / nós conectados
    <>
      <circle cx="12" cy="5.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="5.5" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18.5" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.8 7.2l-4 7.8M13.2 7.2l4 7.8M7.5 17h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  sisab: (
    // gráfico de barras
    <>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 20v-6M12 20V9M17 20v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 7.5l4-2.5 3.5 2L18 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  scpa: (
    // cadeado com check
    <>
      <rect x="5.5" y="10" width="13" height="9.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.8 14.6l1.6 1.6 3-3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  meususe: (
    // celular com coração
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 14.5s-2.8-1.9-2.8-3.7c0-1 .8-1.8 1.7-1.8.5 0 .9.2 1.1.6.2-.4.6-.6 1.1-.6.9 0 1.7.8 1.7 1.8 0 1.8-2.8 3.7-2.8 3.7z" fill="currentColor" />
    </>
  ),
  horus: (
    // frasco / medicamento
    <>
      <path d="M9 3.5h6M10 3.5V8l-3.2 5.4A4 4 0 0 0 10.2 20h3.6a4 4 0 0 0 3.4-6.6L14 8V3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M8.2 14.5h7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  transmissao: (
    // setas de sincronização
    <>
      <path d="M5 9a7.5 7.5 0 0 1 13-2.2M19 15a7.5 7.5 0 0 1-13 2.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 3v4h-4M6 21v-4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  gov: (
    // escudo governo
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function SystemIcon({
  icone,
  cor,
  tamanho = 40,
}: {
  icone: Sistema["icone"];
  cor: string;
  tamanho?: number;
}) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      style={{ color: cor }}
      aria-hidden="true"
    >
      {paths[icone]}
    </svg>
  );
}
