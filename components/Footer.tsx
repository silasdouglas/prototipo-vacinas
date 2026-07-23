export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>
          ©2026 Protótipo — Central de Ajuda Saúde Digital ·{" "}
          <span className="text-gray-400">conteúdo ilustrativo, não oficial</span>
        </p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Idioma</span>
            <select
              className="rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-700"
              defaultValue="pt-BR"
              aria-label="Idioma"
            >
              <option value="pt-BR">português (Brasil)</option>
            </select>
          </label>
        </div>
      </div>
    </footer>
  );
}
