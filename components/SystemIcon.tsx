import type { Sistema } from "@/lib/data";

const paths: Record<Sistema["icone"], React.ReactNode> = {
  pec: (
    // prontuário / documento com cruz
    <path
      fillRule="evenodd"
      d="M6 2h8l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm5 8h2v3h3v2h-3v3h-2v-3H8v-2h3v-3z"
      fill="currentColor"
    />
  ),
  sipni: (
    // seringa
    <>
      <path
        d="M17.6 2.8l3.6 3.6-1.3 1.3-1.15-1.15-1.5 1.5 1.9 1.9-8.7 8.7-3.7-3.7 8.7-8.7 1.9 1.9 1.5-1.5-1.15-1.15z"
        fill="currentColor"
      />
      <path
        d="M5.7 16.1l2.2 2.2-1.4 1.4-1.2-.5-1.5 1.5-1.5-1.5 1.5-1.5-.5-1.2z"
        fill="currentColor"
      />
    </>
  ),
  esus: (
    // pin de território
    <path
      fillRule="evenodd"
      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.4A2.4 2.4 0 1 1 12 6.6a2.4 2.4 0 0 1 0 4.8z"
      fill="currentColor"
    />
  ),
  cnes: (
    // prédio de saúde
    <path
      fillRule="evenodd"
      d="M12 2.5l8.5 5.4V21h-17V7.9L12 2.5zM11 9v3H8v2h3v3h2v-3h3v-2h-3V9h-2z"
      fill="currentColor"
    />
  ),
  cadsus: (
    // cartão de identificação
    <path
      fillRule="evenodd"
      d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5zM8.3 12.6a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8zM5.1 16c.6-1.5 1.8-2.3 3.2-2.3s2.6.8 3.2 2.3H5.1zM13.5 10h5.5v1.6h-5.5V10zm0 3.2h4v1.6h-4v-1.6z"
      fill="currentColor"
    />
  ),
  rnds: (
    // rede / nós conectados
    <>
      <path d="M11.1 6.9l-4.4 8.4 1.5.8 4.4-8.4zM12.9 6.9l4.4 8.4-1.5.8-4.4-8.4zM7 16.1h10v1.7H7z" fill="currentColor" />
      <circle cx="12" cy="5.5" r="2.6" fill="currentColor" />
      <circle cx="5.5" cy="17" r="2.6" fill="currentColor" />
      <circle cx="18.5" cy="17" r="2.6" fill="currentColor" />
    </>
  ),
  sisab: (
    // gráfico de barras
    <>
      <rect x="4.5" y="12" width="4" height="8.5" rx="1" fill="currentColor" />
      <rect x="10" y="7.5" width="4" height="13" rx="1" fill="currentColor" />
      <rect x="15.5" y="3.5" width="4" height="17" rx="1" fill="currentColor" />
    </>
  ),
  scpa: (
    // cadeado
    <>
      <path
        d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        fillRule="evenodd"
        d="M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10zm6.9 4a1.4 1.4 0 1 0-2.8 0c0 .5.3 1 .7 1.2l-.4 2.3h2.2l-.4-2.3c.4-.2.7-.7.7-1.2z"
        fill="currentColor"
      />
    </>
  ),
  meususe: (
    // celular com coração
    <path
      fillRule="evenodd"
      d="M9 2h6a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 15 22H9a2.5 2.5 0 0 1-2.5-2.5v-15A2.5 2.5 0 0 1 9 2zm1 2h4v1.2h-4V4zm2 11.3s-3-2-3-4c0-1.1.85-1.9 1.8-1.9.5 0 .95.25 1.2.65.25-.4.7-.65 1.2-.65.95 0 1.8.8 1.8 1.9 0 2-3 4-3 4z"
      fill="currentColor"
    />
  ),
  horus: (
    // frasco / medicamento
    <path
      d="M9 2.5h6V4h-1v3.7l3.9 6.6A4.2 4.2 0 0 1 14.3 21H9.7a4.2 4.2 0 0 1-3.6-6.7L10 7.7V4H9V2.5z"
      fill="currentColor"
    />
  ),
  transmissao: (
    // setas de sincronização
    <>
      <path
        d="M5 9a7.5 7.5 0 0 1 12.4-2.8M19 15a7.5 7.5 0 0 1-12.4 2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M19.5 2.5v5.5H14z" fill="currentColor" />
      <path d="M4.5 21.5V16H10z" fill="currentColor" />
    </>
  ),
  gov: (
    // escudo governo
    <path
      fillRule="evenodd"
      d="M12 2l8 3.1v6.1c0 5-3.3 8.7-8 10.4-4.7-1.7-8-5.4-8-10.4V5.1L12 2zm-1.5 12.7l-2.6-2.6 1.4-1.4 1.2 1.2 4.1-4.4 1.5 1.4-5.6 5.8z"
      fill="currentColor"
    />
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
