export type Sistema = {
  id: string;
  nome: string;
  descricao: string;
  cor: string; // cor de destaque do card
  icone:
    | "pec"
    | "sipni"
    | "esus"
    | "cnes"
    | "cadsus"
    | "rnds"
    | "sisab"
    | "scpa"
    | "meususe"
    | "horus"
    | "transmissao"
    | "gov";
};

export type Print = {
  src: string;
  legenda: string;
};

export type Video = {
  youtubeId: string;
  titulo: string;
  canal: string;
};

export type Artigo = {
  slug: string;
  sistemaId: string;
  titulo: string;
  resumo: string;
  tags: string[];
  causas: string[];
  passos: string[];
  prints?: Print[];
  videos?: Video[];
  observacao?: string;
  atualizadoEm: string;
};

export const sistemas: Sistema[] = [
  {
    id: "pec",
    nome: "e-SUS APS PEC",
    descricao: "Prontuário Eletrônico do Cidadão",
    cor: "#1351B4",
    icone: "pec",
  },
  {
    id: "sipni",
    nome: "SI-PNI",
    descricao: "Sistema de Informação do Programa Nacional de Imunizações",
    cor: "#168821",
    icone: "sipni",
  },
  {
    id: "esus",
    nome: "e-SUS Território",
    descricao: "Aplicativo para Agentes Comunitários de Saúde",
    cor: "#0C326F",
    icone: "esus",
  },
  {
    id: "cnes",
    nome: "CNES",
    descricao: "Cadastro Nacional de Estabelecimentos de Saúde",
    cor: "#B38C00",
    icone: "cnes",
  },
  {
    id: "cadsus",
    nome: "CADSUS Web",
    descricao: "Cadastro Nacional de Usuários do SUS (CNS)",
    cor: "#7B2D8E",
    icone: "cadsus",
  },
  {
    id: "rnds",
    nome: "RNDS",
    descricao: "Rede Nacional de Dados em Saúde",
    cor: "#00838F",
    icone: "rnds",
  },
  {
    id: "sisab",
    nome: "SISAB",
    descricao: "Sistema de Informação em Saúde para a Atenção Básica",
    cor: "#C2402A",
    icone: "sisab",
  },
  {
    id: "scpa",
    nome: "SCPA",
    descricao: "Sistema de Cadastro e Permissão de Acesso",
    cor: "#455A64",
    icone: "scpa",
  },
  {
    id: "meususe",
    nome: "Meu SUS Digital",
    descricao: "Aplicativo do cidadão (antigo Conecte SUS)",
    cor: "#2E7D32",
    icone: "meususe",
  },
  {
    id: "horus",
    nome: "Hórus",
    descricao: "Sistema Nacional de Gestão da Assistência Farmacêutica",
    cor: "#5E35B1",
    icone: "horus",
  },
  {
    id: "transmissao",
    nome: "Transmissão / LEDI",
    descricao: "Envio de fichas, lotes e integração com o Centralizador",
    cor: "#00579D",
    icone: "transmissao",
  },
  {
    id: "gov",
    nome: "Acesso gov.br",
    descricao: "Login único, níveis de conta e problemas de acesso",
    cor: "#071D41",
    icone: "gov",
  },
];

export const artigos: Artigo[] = [
  // ---------------- PEC ----------------
  {
    slug: "pec-nao-abre-servico-parado",
    sistemaId: "pec",
    titulo: "PEC não abre no navegador (ERR_CONNECTION_REFUSED)",
    resumo:
      "A página do PEC não carrega e o navegador exibe erro de conexão recusada na porta 8080.",
    tags: ["pec", "nao abre", "conexao", "8080", "servico", "err_connection_refused"],
    causas: [
      "Serviço do e-SUS PEC parado após reinicialização do servidor",
      "Firewall bloqueando a porta 8080",
      "Outro programa ocupando a porta configurada",
    ],
    passos: [
      "No servidor, abra os Serviços do Windows (services.msc) e localize o serviço “e-SUS-AB PEC”.",
      "Se estiver parado, clique em Iniciar. Configure o tipo de inicialização como “Automático”.",
      "Teste no navegador do próprio servidor: http://localhost:8080.",
      "Se abrir no servidor mas não nas estações, libere a porta 8080 no firewall do Windows (regra de entrada TCP).",
      "Se a porta estiver em uso por outro programa, identifique com “netstat -ano | findstr 8080” e ajuste.",
    ],
    prints: [
      {
        src: "/prints/pec-servicos.svg",
        legenda:
          "Serviços do Windows (services.msc) com o serviço “e-SUS-AB PEC” parado — clique em Iniciar.",
      },
    ],
    observacao:
      "Após queda de energia é comum o serviço não subir sozinho. Verifique também o serviço do PostgreSQL.",
    atualizadoEm: "2026-06-12",
  },
  {
    slug: "pec-erro-atualizacao-versao",
    sistemaId: "pec",
    titulo: "Erro ao atualizar o PEC para uma nova versão",
    resumo:
      "O instalador falha durante a atualização ou o sistema não inicia após atualizar a versão do PEC.",
    tags: ["pec", "atualizacao", "instalador", "versao", "erro 500", "backup"],
    causas: [
      "Backup do banco não realizado e migração interrompida",
      "Versão do PostgreSQL incompatível com a nova versão do PEC",
      "Espaço em disco insuficiente durante a migração",
      "Pulo de versões sem seguir o caminho de atualização recomendado",
    ],
    passos: [
      "Antes de tudo: faça backup do banco (pg_dump) e só então execute o instalador.",
      "Confira no site oficial do e-SUS APS o caminho de atualização (algumas versões exigem passar por intermediárias).",
      "Verifique o espaço em disco — a migração pode exigir o dobro do tamanho atual do banco.",
      "Execute o instalador como Administrador.",
      "Se falhar, consulte o log em C:\\Program Files\\e-SUS\\webserver\\logs para identificar a etapa com erro.",
      "Em caso de banco corrompido, restaure o backup e repita o processo.",
    ],
    observacao:
      "Nunca atualize em horário de atendimento. Sempre valide o treinamento em ambiente homólogo se disponível.",
    atualizadoEm: "2026-05-30",
  },
  {
    slug: "pec-lentidao",
    sistemaId: "pec",
    titulo: "PEC muito lento para abrir prontuários e agendas",
    resumo:
      "Demora excessiva ao abrir telas, salvar atendimentos ou carregar a agenda dos profissionais.",
    tags: ["pec", "lento", "lentidao", "desempenho", "performance", "travando"],
    causas: [
      "Servidor com pouca memória RAM para o volume de estações",
      "Banco PostgreSQL sem manutenção (VACUUM/ANALYZE)",
      "Rede local com problemas ou acesso via Wi-Fi instável",
      "Antivírus escaneando as pastas do PEC/PostgreSQL em tempo real",
    ],
    passos: [
      "Confira os requisitos mínimos da versão instalada (RAM/CPU) em relação ao número de usuários simultâneos.",
      "Adicione exceção no antivírus para as pastas do e-SUS e do PostgreSQL.",
      "Prefira estações cabeadas; Wi-Fi instável causa timeouts intermitentes.",
      "Reinicie o serviço do PEC fora do horário de pico e monitore.",
      "Avalie mover o banco para SSD caso ainda esteja em disco mecânico.",
    ],
    atualizadoEm: "2026-04-18",
  },
  {
    slug: "pec-recuperar-senha-instalador",
    sistemaId: "pec",
    titulo: "Recuperar senha do usuário instalador do PEC",
    resumo:
      "O acesso ao usuário “instalador” foi perdido e é necessário redefinir a senha para administrar o sistema.",
    tags: ["pec", "senha", "instalador", "recuperar", "acesso", "login"],
    causas: ["Senha do instalador esquecida ou perdida com a troca de responsável técnico"],
    passos: [
      "No servidor onde o PEC está instalado, acesse a URL http://localhost:8080/#/reset (apenas localmente).",
      "Informe a contra-senha gerada pelo suporte quando solicitada, ou utilize o utilitário de redefinição da instalação.",
      "Defina a nova senha seguindo os critérios de segurança exibidos.",
      "Guarde a senha em local seguro do município (não em papel na recepção).",
    ],
    observacao:
      "O procedimento exato pode variar conforme a versão. Consulte o núcleo de TI do município antes de executar.",
    atualizadoEm: "2026-03-02",
  },
  {
    slug: "pec-cidadao-duplicado",
    sistemaId: "pec",
    titulo: "Cidadão duplicado no PEC — como unificar cadastros",
    resumo:
      "O mesmo cidadão aparece duas vezes na lista, com atendimentos divididos entre os cadastros.",
    tags: ["pec", "cidadao", "duplicado", "unificar", "cadastro", "cpf", "cns"],
    causas: [
      "Cadastro criado sem CPF/CNS e outro criado depois com documento",
      "Divergência de grafia do nome entre fichas importadas",
    ],
    passos: [
      "Acesse o módulo “Cidadão” com perfil que tenha permissão de administração.",
      "Busque pelo nome e identifique os registros duplicados.",
      "Use a função “Unificar cadastros”, selecionando o cadastro mais completo como principal.",
      "Confirme a unificação — os atendimentos passam a compor um único histórico.",
    ],
    atualizadoEm: "2026-02-10",
  },
  // ---------------- SI-PNI ----------------
  {
    slug: "sipni-dose-nao-aparece",
    sistemaId: "sipni",
    titulo: "Dose aplicada não aparece no SI-PNI",
    resumo:
      "Vacina registrada no PEC ou em sistema próprio não é exibida no SI-PNI nem no cartão digital do cidadão.",
    tags: ["sipni", "dose", "vacina", "nao aparece", "rnds", "sincronizacao", "cartao"],
    causas: [
      "Falha de sincronização entre o PEC e a RNDS",
      "Registro feito com CNS/CPF divergente do cadastro do cidadão",
      "Lote de registros ainda não processado pelo barramento",
      "Erro de validação silencioso (imunobiológico ou dose incompatível)",
    ],
    passos: [
      "Confirme no PEC se o atendimento foi finalizado (registros em rascunho não sincronizam).",
      "Verifique em Configurações > RNDS se o certificado digital do município está válido e a conexão ativa.",
      "Confira se o CPF/CNS usado no registro é o mesmo do cadastro do cidadão no CADSUS.",
      "Aguarde até 72h — o processamento no barramento pode não ser imediato.",
      "Persistindo, registre chamado no suporte do e-SUS informando o protocolo de envio.",
    ],
    prints: [
      {
        src: "/prints/pec-vacinacao.svg",
        legenda:
          "Módulo Vacinação do PEC — atendimento precisa estar finalizado para a dose sincronizar.",
      },
      {
        src: "/prints/sipni-registro.svg",
        legenda:
          "Consulta de doses no SI-PNI — confira se o CPF/CNS do registro é o mesmo do cadastro.",
      },
    ],
    videos: [
      {
        youtubeId: "YR-oQiz4rlk",
        titulo: "Série (PNI) e-SUS APS — Módulo 02: O Registro da Vacinação na Aplicação PEC",
        canal: "Telessaúde Bahia",
      },
      {
        youtubeId: "v-TF7FxCAlA",
        titulo: "Registro de Vacinas no PEC e-SUS APS",
        canal: "Tutorial no YouTube",
      },
    ],
    atualizadoEm: "2026-06-25",
  },
  {
    slug: "sipni-erro-registro-dose",
    sistemaId: "sipni",
    titulo: "Erro ao registrar dose no SI-PNI (imunobiológico incompatível)",
    resumo:
      "Ao salvar o registro, o sistema exibe erro de validação de dose, estratégia ou imunobiológico.",
    tags: ["sipni", "erro", "registro", "dose", "estrategia", "imunobiologico", "validacao"],
    causas: [
      "Combinação inválida de imunobiológico + dose + estratégia para a idade do cidadão",
      "Calendário vacinal desatualizado no sistema local",
      "Lote/fabricante não cadastrado para o estabelecimento",
    ],
    passos: [
      "Confira idade do cidadão e a regra do calendário nacional para o imunobiológico selecionado.",
      "Verifique se a estratégia (rotina, campanha, intensificação) corresponde à ação em curso.",
      "Atualize o cadastro de lotes no módulo de movimento de imunobiológicos.",
      "Se a regra do calendário estiver defasada, atualize a versão do sistema.",
    ],
    prints: [
      {
        src: "/prints/sipni-registro.svg",
        legenda:
          "Tela de registro de dose no SI-PNI — imunobiológico, dose e estratégia precisam ser compatíveis.",
      },
    ],
    videos: [
      {
        youtubeId: "U4SSnUa_rvw",
        titulo:
          "Série (PNI) e-SUS APS — Módulo 03: O Registro da Vacinação no PEC e Aplicativo e-SUS Vacinação",
        canal: "Telessaúde Bahia",
      },
      {
        youtubeId: "9mGhQQxC4yA",
        titulo: "SI-PNI: recebimento e registro de movimentação de lotes de vacina",
        canal: "Tutorial no YouTube",
      },
    ],
    atualizadoEm: "2026-05-14",
  },
  {
    slug: "sipni-login-govbr",
    sistemaId: "sipni",
    titulo: "Não consigo entrar no SI-PNI com a conta gov.br",
    resumo:
      "Login retorna erro de permissão ou volta para a tela inicial após autenticar no gov.br.",
    tags: ["sipni", "login", "govbr", "acesso", "perfil", "permissao"],
    causas: [
      "Usuário sem perfil vinculado no novo SI-PNI (gestor não liberou acesso)",
      "Conta gov.br com nível bronze — alguns perfis exigem prata ou ouro",
      "Vínculo com estabelecimento desatualizado no CNES",
    ],
    passos: [
      "Confirme com o gestor municipal se seu CPF foi vinculado ao perfil correto no SI-PNI.",
      "Eleve o nível da conta gov.br para prata ou ouro (via app gov.br, banco ou certificado digital).",
      "Verifique no CNES se seu vínculo com o estabelecimento está ativo.",
      "Limpe cookies do navegador ou teste em janela anônima antes de tentar de novo.",
    ],
    atualizadoEm: "2026-06-01",
  },
  {
    slug: "sipni-divergencia-doses",
    sistemaId: "sipni",
    titulo: "Divergência entre doses do SI-PNI e o cartão de vacina do cidadão",
    resumo:
      "O quantitativo de doses no sistema não bate com o cartão físico ou com o Meu SUS Digital.",
    tags: ["sipni", "divergencia", "doses", "cartao", "meu sus digital", "historico"],
    causas: [
      "Doses antigas aplicadas antes da informatização não digitadas",
      "Registros duplicados por reenvio de lotes",
      "Cadastros duplicados do cidadão (cada um com parte do histórico)",
    ],
    passos: [
      "Verifique se o cidadão possui mais de um CNS ativo e solicite unificação no CADSUS.",
      "Registre doses históricas (transcrição de caderneta) com a data real de aplicação.",
      "Para duplicidades, solicite ao gestor a exclusão do registro repetido citando o protocolo.",
    ],
    videos: [
      {
        youtubeId: "hwrENIzFQRo",
        titulo:
          "Como cancelar ou retificar registros de doses de vacina equivocados pela RNDS no CDS do e-SUS APS",
        canal: "e-SUS APS",
      },
    ],
    atualizadoEm: "2026-04-22",
  },
  // ---------------- Transmissão ----------------
  {
    slug: "transmissao-lote-nao-enviado",
    sistemaId: "transmissao",
    titulo: "Lote de fichas não é enviado ao Centralizador Nacional",
    resumo:
      "Os lotes ficam presos com status “Não enviado” ou “Aguardando envio” na transmissão do PEC.",
    tags: ["transmissao", "lote", "envio", "centralizador", "sisab", "pendente"],
    causas: [
      "Sem conexão do servidor com a internet no momento do envio agendado",
      "Certificado/contra-chave de transmissão inválida",
      "Serviço de transmissão travado após acúmulo de lotes",
      "Bloqueio de proxy/firewall aos endpoints do Ministério da Saúde",
    ],
    passos: [
      "Em Transmissão de Dados, confira o “status do serviço” e o horário do próximo envio.",
      "Teste a conectividade do servidor com a internet (os envios saem do servidor, não da estação).",
      "Confirme a validade do certificado de transmissão em Configurações.",
      "Force o envio manual do lote e acompanhe a mudança de status.",
      "Se o proxy da prefeitura filtra tráfego, solicite liberação dos domínios *.saude.gov.br.",
    ],
    prints: [
      {
        src: "/prints/pec-transmissao.svg",
        legenda:
          "Tela de Transmissão de Dados do PEC — lotes com status “Não enviado” aguardando reenvio.",
      },
    ],
    atualizadoEm: "2026-06-19",
  },
  {
    slug: "transmissao-ficha-rejeitada-cns",
    sistemaId: "transmissao",
    titulo: "Ficha rejeitada: CNS ou CPF do profissional/cidadão inválido",
    resumo:
      "O relatório de inconsistências do SISAB aponta fichas rejeitadas por documento inválido.",
    tags: ["transmissao", "ficha", "rejeitada", "cns", "cpf", "inconsistencia", "sisab", "ledi"],
    causas: [
      "CNS digitado com erro ou desativado após unificação no CADSUS",
      "Profissional com CNS diferente entre CNES e ficha enviada",
      "Cidadão sem CPF/CNS em ficha que passou a exigir identificação",
    ],
    passos: [
      "Consulte o relatório de inconsistências no SISAB (Relatórios > Validação) e identifique o campo rejeitado.",
      "Corrija o documento no cadastro de origem (cidadão no PEC, profissional no CNES).",
      "Reabra e reenvie a ficha corrigida na próxima competência.",
      "Oriente a equipe a buscar o cidadão pela base do CADSUS antes de criar cadastro manual.",
    ],
    atualizadoEm: "2026-05-08",
  },
  // ---------------- CNES ----------------
  {
    slug: "cnes-profissional-nao-vinculado",
    sistemaId: "cnes",
    titulo: "Profissional não aparece no PEC (sem vínculo no CNES)",
    resumo:
      "O profissional foi contratado mas não aparece para lotação/agenda no PEC.",
    tags: ["cnes", "profissional", "vinculo", "lotacao", "pec", "importacao", "xml"],
    causas: [
      "Vínculo ainda não cadastrado ou não processado no CNES",
      "XML do CNES desatualizado no PEC (importação pendente)",
      "CBO do vínculo incompatível com o tipo de equipe",
    ],
    passos: [
      "Confirme com o cadastrador municipal se o vínculo foi incluído na última competência do CNES.",
      "No PEC, importe o XML atualizado do CNES (Administração > Importar CNES).",
      "Após importar, faça a lotação do profissional na unidade e equipe corretas.",
      "Verifique se o CBO corresponde à função (ex.: enfermeiro da ESF exige CBO específico).",
    ],
    observacao:
      "O processamento da competência do CNES pode levar dias — o PEC só enxerga o que já foi publicado no XML.",
    atualizadoEm: "2026-06-05",
  },
  {
    slug: "cnes-estabelecimento-desatualizado",
    sistemaId: "cnes",
    titulo: "Dados do estabelecimento desatualizados no CNES",
    resumo:
      "Endereço, horário ou serviços do estabelecimento aparecem incorretos nos sistemas do Ministério.",
    tags: ["cnes", "estabelecimento", "atualizacao", "cadastro", "competencia"],
    causas: [
      "Atualização não enviada pelo cadastrador municipal",
      "Competência ainda não processada nacionalmente",
    ],
    passos: [
      "Solicite ao cadastrador CNES do município a atualização no SCNES local.",
      "Acompanhe o envio da competência e o processamento no site cnes.datasus.gov.br.",
      "Após publicação, reimporte o XML nos sistemas que consomem o CNES (ex.: PEC).",
    ],
    atualizadoEm: "2026-03-27",
  },
  // ---------------- CADSUS ----------------
  {
    slug: "cadsus-cns-duplicado",
    sistemaId: "cadsus",
    titulo: "Cidadão com dois números de CNS — unificação de cadastro",
    resumo:
      "O cidadão possui múltiplos Cartões SUS e o histórico fica dividido entre eles.",
    tags: ["cadsus", "cns", "duplicado", "unificacao", "cartao sus", "higienizacao"],
    causas: [
      "Cadastros criados em municípios diferentes sem verificação prévia",
      "Cadastro provisório criado em atendimento de urgência",
    ],
    passos: [
      "Acesse o CADSUS Web com perfil de operador municipal.",
      "Localize os cadastros pelo CPF e confirme que pertencem à mesma pessoa.",
      "Solicite a unificação — o CNS definitivo absorve o histórico dos provisórios.",
      "Oriente o cidadão a usar sempre o CPF nos próximos atendimentos.",
    ],
    atualizadoEm: "2026-04-09",
  },
  {
    slug: "cadsus-pesquisa-indisponivel",
    sistemaId: "cadsus",
    titulo: "Pesquisa do CADSUS fora do ar dentro do PEC",
    resumo:
      "Ao buscar cidadão na base nacional, o PEC retorna “serviço indisponível” ou a busca não responde.",
    tags: ["cadsus", "pesquisa", "indisponivel", "pec", "base nacional", "timeout"],
    causas: [
      "Instabilidade do serviço nacional do CADSUS",
      "Certificado de integração vencido no PEC",
      "Bloqueio de firewall aos serviços do DATASUS",
    ],
    passos: [
      "Teste em outro horário — instabilidades nacionais costumam ser temporárias.",
      "Verifique a validade do certificado em Configurações > Integração.",
      "Enquanto indisponível, use a busca na base local e complete o cadastro depois.",
    ],
    atualizadoEm: "2026-02-28",
  },
  // ---------------- RNDS ----------------
  {
    slug: "rnds-certificado-vencido",
    sistemaId: "rnds",
    titulo: "Certificado digital da RNDS vencido ou inválido",
    resumo:
      "Os envios à RNDS falham com erro de autenticação e os registros param de sincronizar.",
    tags: ["rnds", "certificado", "vencido", "autenticacao", "e-cnpj", "sincronizacao"],
    causas: [
      "Certificado e-CNPJ do município expirado",
      "Senha do certificado alterada sem atualizar a configuração",
      "Cadastro do gestor no portal de serviços da RNDS desatualizado",
    ],
    passos: [
      "Verifique a validade do certificado digital (e-CNPJ A1) usado na integração.",
      "Renove o certificado junto à autoridade certificadora se expirado.",
      "Atualize o arquivo e a senha do certificado nas configurações de integração do PEC.",
      "Reenvie os registros pendentes e confirme o status de processamento.",
    ],
    atualizadoEm: "2026-06-30",
  },
  // ---------------- SISAB ----------------
  {
    slug: "sisab-producao-nao-aparece",
    sistemaId: "sisab",
    titulo: "Produção enviada não aparece nos relatórios do SISAB",
    resumo:
      "As fichas foram transmitidas pelo PEC mas o relatório de produção do SISAB não exibe os dados.",
    tags: ["sisab", "producao", "relatorio", "competencia", "validacao", "financiamento"],
    causas: [
      "Envio após o fechamento da competência",
      "Fichas rejeitadas na validação (não entram no consolidado)",
      "Prazo de processamento nacional ainda em curso",
    ],
    passos: [
      "Confirme no PEC se os lotes constam como “Enviado” com data dentro da competência.",
      "Consulte o relatório de validação no portal do SISAB e trate as inconsistências.",
      "Lembre que dados enviados após o fechamento só aparecem na competência seguinte.",
    ],
    observacao:
      "O calendário de fechamento das competências é publicado no portal da SAPS — acompanhe os prazos.",
    atualizadoEm: "2026-05-21",
  },
  // ---------------- SCPA ----------------
  {
    slug: "scpa-perfil-pendente",
    sistemaId: "scpa",
    titulo: "Solicitação de acesso no SCPA pendente de aprovação",
    resumo:
      "O usuário solicitou perfil em um sistema (ex.: SI-PNI, Hórus) e o acesso segue pendente.",
    tags: ["scpa", "perfil", "acesso", "pendente", "aprovacao", "gestor"],
    causas: [
      "Gestor municipal/estadual ainda não aprovou a solicitação",
      "Solicitação feita para o estabelecimento ou esfera errada",
    ],
    passos: [
      "Acesse o SCPA e confira o status da solicitação em “Meus sistemas”.",
      "Identifique quem é o gestor autorizador do sistema no seu município e peça a aprovação.",
      "Se solicitou para o local errado, cancele e refaça apontando o estabelecimento correto.",
    ],
    atualizadoEm: "2026-03-15",
  },
  // ---------------- Meu SUS Digital ----------------
  {
    slug: "meususe-vacina-nao-aparece",
    sistemaId: "meususe",
    titulo: "Vacina não aparece no aplicativo Meu SUS Digital",
    resumo:
      "O cidadão tomou a vacina mas a dose não consta na carteira digital do aplicativo.",
    tags: ["meu sus digital", "conecte sus", "vacina", "nao aparece", "carteira", "cidadao"],
    causas: [
      "Registro ainda não sincronizado com a RNDS (até 72h)",
      "Dose registrada em cadastro duplicado (outro CNS)",
      "Aplicação registrada com CPF divergente",
    ],
    passos: [
      "Aguarde até 72 horas após a aplicação.",
      "Confira se o CPF informado na sala de vacina é o mesmo do login gov.br.",
      "Procure a unidade onde se vacinou e peça a conferência do registro.",
      "Caso haja dois CNS, solicite a unificação de cadastros na unidade de saúde.",
    ],
    videos: [
      {
        youtubeId: "onVEMUB1LIY",
        titulo: "Informações em Saúde: e-SUS AB — Registro de Vacinas (Ep. 9)",
        canal: "Série Informações em Saúde",
      },
    ],
    atualizadoEm: "2026-06-08",
  },
  // ---------------- Hórus ----------------
  {
    slug: "horus-estoque-divergente",
    sistemaId: "horus",
    titulo: "Estoque divergente no Hórus após dispensação",
    resumo:
      "O saldo físico do medicamento não corresponde ao saldo apresentado pelo sistema.",
    tags: ["horus", "estoque", "divergencia", "dispensacao", "farmacia", "ajuste"],
    causas: [
      "Entradas ou saídas lançadas em duplicidade",
      "Dispensações não registradas durante queda do sistema",
      "Lote registrado com quantidade errada na entrada",
    ],
    passos: [
      "Faça o inventário físico do item divergente.",
      "Compare com o extrato de movimentação do produto no Hórus.",
      "Lance o ajuste de estoque (entrada/saída por ajuste) com justificativa.",
      "Padronize o registro imediato das dispensações para evitar reincidência.",
    ],
    atualizadoEm: "2026-04-30",
  },
  // ---------------- gov.br ----------------
  {
    slug: "govbr-nivel-conta",
    sistemaId: "gov",
    titulo: "Como elevar o nível da conta gov.br (bronze, prata, ouro)",
    resumo:
      "Sistemas da saúde exigem conta prata ou ouro e o acesso é negado com conta bronze.",
    tags: ["govbr", "nivel", "bronze", "prata", "ouro", "conta", "acesso"],
    causas: ["Conta criada apenas com CPF e senha (nível bronze)"],
    passos: [
      "Baixe o aplicativo gov.br e faça o reconhecimento facial pela CNH (nível prata/ouro).",
      "Ou acesse via banco credenciado (internet banking) para obter o nível prata.",
      "Com certificado digital ICP-Brasil, a conta sobe para o nível ouro.",
      "Após elevar o nível, saia e entre novamente no sistema desejado.",
    ],
    atualizadoEm: "2026-01-20",
  },
];

// util ------------------------------------------------------------------

export function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function buscarArtigos(consulta: string): Artigo[] {
  const q = normalizar(consulta.trim());
  if (!q) return [];
  const termos = q.split(/\s+/);
  return artigos
    .map((artigo) => {
      const alvo = normalizar(
        [
          artigo.titulo,
          artigo.resumo,
          artigo.tags.join(" "),
          sistemas.find((s) => s.id === artigo.sistemaId)?.nome ?? "",
        ].join(" ")
      );
      const acertos = termos.filter((t) => alvo.includes(t)).length;
      const noTitulo = termos.filter((t) => normalizar(artigo.titulo).includes(t)).length;
      return { artigo, pontos: acertos + noTitulo * 2 };
    })
    .filter(({ pontos, artigo }) => {
      const minimo = Math.ceil(termos.length / 2);
      return pontos > 0 && termos.filter((t) => normalizar(
        [artigo.titulo, artigo.resumo, artigo.tags.join(" ")].join(" ")
      ).includes(t)).length >= minimo;
    })
    .sort((a, b) => b.pontos - a.pontos)
    .map(({ artigo }) => artigo);
}

export function artigosDoSistema(sistemaId: string): Artigo[] {
  return artigos.filter((a) => a.sistemaId === sistemaId);
}

export function obterSistema(id: string): Sistema | undefined {
  return sistemas.find((s) => s.id === id);
}

export function obterArtigo(slug: string): Artigo | undefined {
  return artigos.find((a) => a.slug === slug);
}

export const buscasPopulares = [
  "vacina não aparece",
  "lote não enviado",
  "PEC não abre",
  "certificado RNDS vencido",
  "unificar cadastro",
  "login gov.br",
];
