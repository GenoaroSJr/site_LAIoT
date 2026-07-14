import equipe from './pt/equipe.js'
import pesquisa from './pt/pesquisa.js'
import publicacoes from './pt/publicacoes.js'
import teses from './pt/teses.js'

export default {
  /* ── Nav ── */
  nav: {
    about: 'Sobre',
    research: 'Pesquisa',
    team: 'Equipe',
    publications: 'Publicações',
    theses: 'Teses e Dissertações',
    projects: 'Projetos',
    osa: 'Optica',
    news: 'Notícias',
    gallery: 'Galeria',
    contact: 'Contato',
    langToggle: 'EN',
  },

  /* ── Footer ── */
  footer: {
    inst: 'Universidade Federal de Itajubá',
    rights: '© 2025 LabTel UNIFEI. Todos os direitos reservados.',
  },

  /* ── Carousel (Home) ── */
  carousel: [
    {
      label: 'Telecomunicações · UNIFEI · IESTI',
      title: 'Pesquisa de Fronteira em Telecomunicações',
      sub: 'O LabTel é o Laboratório de Telecomunicações da Universidade Federal de Itajubá. Desenvolvemos ciência em óptica integrada, radiofrequência e redes 5G.',
      img: 'assets/imgs/carousel/carrousel_1.jpg',
      bgFit: 'contain',
      ctaPrimary: { label: 'Conheça nossa pesquisa', to: '/pesquisa' },
      ctaSecondary: { label: 'Entrar em contato', to: '/contato' },
    },
    {
      label: 'Pesquisa de Fronteira',
      title: 'Óptica Integrada em Silício',
      sub: 'Desenvolvemos dispositivos fotônicos nanométricos para comunicações de alta velocidade com baixo consumo de energia.',
      img: 'assets/imgs/carousel/carrousel_3.jpg',
      link: '/pesquisa',
      linkLabel: 'Ver pesquisa',
    },
    {
      label: 'Radiofrequência',
      title: 'Chipless RFID para IoT',
      sub: 'Sensores sem circuito integrado ativo para rastreamento e sensoriamento em ambientes industriais e biomédicos.',
      img: 'assets/imgs/carousel/carrousel_4.jpg',
      link: '/pesquisa',
      linkLabel: 'Saiba mais',
    },
    {
      label: 'Redes 5G',
      title: 'Rádio sobre Fibra',
      sub: 'Sistemas óptico-wireless que viabilizam fronthaul e backhaul de alta capacidade para redes 5G de nova geração.',
      img: 'assets/imgs/carousel/carrousel_2.jpg',
      link: '/pesquisa',
      linkLabel: 'Saiba mais',
    },
  ],

  /* ── Home Hero ── */
  home: {
    statsLabel: 'LabTel em números',
    news: 'Últimas Notícias',
    newsSub: 'Acompanhe os últimas eventos, publicações e atividades do laboratório.',
    resTitle: 'Áreas de Pesquisa',
    resSub: 'Cinco linhas de investigação em eletromagnetismo, cobrindo da nanofotônica às redes celulares de quinta geração.',
    ctaTitle: 'Interessado em colaborar?',
    ctaSub: 'O LabTel está aberto a parcerias com empresas, institutos de pesquisa e outras universidades.',
    ctaBtn: 'Entre em contato',
    ctaBtnSecondary: 'Conheça a equipe',
    stats: [
      { value: '100 m²', label: 'Área do laboratório' },
      { value: '5', label: 'Linhas de pesquisa' },
      { value: '7+', label: 'Parceiros ativos' },
      { value: '30+', label: 'Anos de pesquisa' },
    ],
    resAreas: [
      {
        id: 'optica',
        num: '01',
        label: 'Linha de Pesquisa',
        title: 'Óptica Integrada',
        desc: 'Nanofotônica do silício (Silicon Photonics): guias de onda, ressonadores ópticos e acopladores baseados em grades de Bragg.',
        tags: ['Silicon Photonics', 'Nanofotônica', 'Grades de Bragg'],
      },
      {
        id: 'fibraOptica',
        num: '02',
        label: 'Linha de Pesquisa',
        title: 'Fibras Ópticas de Cristal Fotônico',
        desc: 'Fibras microestruturadas (PCF/MOF) com alta flexibilidade de projeto para dispersão, área efetiva e sensoriamento óptico.',
        tags: ['PCF', 'Fibra Microestruturada', 'Sensoriamento Óptico'],
      },
      {
        id: 'antenas',
        num: '03',
        label: 'Linha de Pesquisa',
        title: 'Antenas e Propagação',
        desc: 'Antenas e arranjos de alta eficiência, banda larga e opticamente controláveis, incluindo transferência de energia sem fios.',
        tags: ['Antenas', 'Transferência de Energia sem Fios', 'Controle Óptico'],
      },
      {
        id: 'terahertz',
        num: '04',
        label: 'Linha de Pesquisa',
        title: 'Dispositivos em Terahertz',
        desc: 'Modelagem do efeito eletro-óptico em moduladores que operam na faixa dos THz, com confinamento de onda eletromagnética.',
        tags: ['Terahertz', 'Moduladores Eletro-ópticos', 'Cristais Anisotrópicos'],
      },
      {
        id: 'laiot',
        num: '05',
        label: 'Linha de Pesquisa',
        title: 'LAIoT',
        desc: 'SpinOff do LabTel para pesquisa em RF e IoT: LoRaWan, Sigfox e NB-IoT aplicados à eficiência energética.',
        tags: ['IoT', 'LoRaWan', 'Sigfox'],
      },
    ],
    latestNews: [
      {
        date: 'Set 2022',
        tag: 'Evento',
        title: 'III Workshop LabTel-LAIoT',
        desc: 'Óptica, Fotônica e redes 5G: a integração e conectividade dos sistemas de telecomunicações.',
        accent: '#003366',
      },
      {
        date: 'Jun 2022',
        tag: 'Publicação',
        title: 'Pesquisa em Sistemas RoF Publicada no SBrT 2022',
        desc: 'Trabalho sobre sistema RoF/BS-ILC com transmissor de múltiplos comprimentos de onda apresentado no SBrT.',
        accent: '#1B6EDB',
      },
      {
        date: 'Out 2021',
        tag: 'Conferência',
        title: 'Participação no ELOS 2021',
        desc: 'Pesquisadores do LabTel apresentaram técnicas de fotônica de micro-ondas para sistemas 5G/6G.',
        accent: '#2E86E8',
      },
    ],
  },

  /* ── Sobre ── */
  sobre: {
    pageTitle: 'Sobre o LabTel',
    pageSub: 'Conheça nossa missão, história e infraestrutura de pesquisa.',
    missionLabel: 'Missão',
    missionTitle: 'Pesquisa de Fronteira em Telecomunicações',
    missionP1: 'O LabTel é o grupo de Telecomunicações da Universidade Federal de Itajubá (UNIFEI), vinculado ao IESTI – Instituto de Engenharia de Sistemas e Tecnologia da Informação. Nosso foco é a pesquisa básica e aplicada em eletromagnetismo, com ênfase em óptica, fotônica, radiofrequência e novas redes de comunicação.',
    missionP2: 'O laboratório atua em estreita colaboração com parceiros nacionais e internacionais — empresas, institutos de pesquisa e outras universidades — buscando traduzir descobertas científicas em soluções tecnológicas de impacto real.',
    missionQuote: '"Contribuir para o avanço da ciência em telecomunicações, formando pesquisadores capacitados para os desafios da inovação tecnológica."',
    visionLabel: 'Visão',
    visionText: 'Ser referência nacional em pesquisa em telecomunicações, com contribuições científicas reconhecidas pela comunidade internacional e conexão direta com o setor produtivo.',
    groupLabel: 'O Grupo',
    groupTitle: 'Três Décadas de Ciência',
    groupP1: 'Fundado no âmbito do IESTI na UNIFEI, o LabTel cresceu ao longo dos anos consolidando três grandes linhas de pesquisa: óptica e fotônica (incluindo Silicon Photonics), radiofrequência (com foco em RFID sem chip) e redes 5G com integração óptico-wireless.',
    groupP2: 'O laboratório é classificado como multiusuário, atendendo alunos de graduação e pós-graduação, pesquisadores visitantes e parceiros empresariais. Mantemos acordos de cooperação com instituições no Brasil e no exterior.',
    infraLabel: 'Infraestrutura',
    infraTitle: 'Equipamentos & Instalações',
    infraSub: 'Espaço de 100 m² equipado com instrumentação avançada para pesquisa experimental em óptica, RF e telecomunicações.',
    locationLabel: 'Localização',
    locationTitle: 'Como nos Encontrar',
    locInst: 'IESTI – Instituto de Engenharia de Sistemas e Tecnologia da Informação / UNIFEI',
    mapLabel: 'Itajubá, Minas Gerais',
    stats: [
      { value: '100 m²', label: 'Área do laboratório', color: '#003366' },
      { value: '5', label: 'Linhas de pesquisa', color: '#1B6EDB' },
      { value: '7+', label: 'Parceiros', color: '#2E86E8' },
      { value: 'IESTI', label: 'Instituto vinculado', color: '#003366' },
    ],
    infraItems: [
      { title: 'Óptica & Fotônica', desc: 'Bancadas para caracterização de dispositivos ópticos integrados e sistemas fotônicos.', iconRadius: '50%', color: '#003366' },
      { title: 'Radiofrequência', desc: 'Instrumentação para medidas de sinais RF, antenas e dispositivos sem fio.', iconRadius: '2px', color: '#1B6EDB' },
      { title: 'Telecomunicações 5G', desc: 'Equipamentos para pesquisa em sistemas Rádio sobre Fibra e fronthaul 5G.', iconRadius: '1px', color: '#2E86E8' },
      { title: 'Simulação Computacional', desc: 'Servidores e estações para simulações de dispositivos ópticos e sistemas de comunicação.', iconRadius: '4px', color: '#003366' },
      { title: 'Multiusuário', desc: 'Aberto a estudantes, pesquisadores externos e parceiros empresariais mediante solicitação.', iconRadius: '50%', color: '#1B6EDB' },
      { title: 'Propriedades Ópticas', desc: 'Análise de propriedades ópticas de materiais e componentes para redes e sensores.', iconRadius: '2px', color: '#2E86E8' },
    ],
  },

  /* ── Pesquisa ── */
  pesquisa,

  /* ── Equipe ── */
  equipe,

  /* ── Publicações ── */
  publicacoes,

  /* ── Teses & Dissertações ── */
  teses,

  /* ── Projetos ── */
  projetos: {
    pageTitle: 'Projetos & Parcerias',
    pageSub: 'Projetos de pesquisa em andamento, fontes de financiamento e colaborações institucionais.',
    projectsLabel: 'Projetos',
    projectsTitle: 'Pesquisas em Andamento',
    projectsSub: 'Projetos ativos com financiamento público e parcerias privadas.',
    fundedBy: 'Financiado por:',
    statusActive: 'Em andamento',
    statusDone: 'Concluído',
    fundersLabel: 'Financiamento',
    fundersTitle: 'Agências de Fomento',
    fundersSub: 'Projetos financiados por agências nacionais de ciência e tecnologia.',
    partnersLabel: 'Parcerias',
    partnersTitle: 'Empresas & Instituições',
    partnersSub: 'Parceiros estratégicos nacionais e internacionais.',
    projects: [
      { title: 'Sistemas Rádio sobre Fibra para Infraestrutura 5G', desc: 'Desenvolvimento de sistemas RoF com transmissores de múltiplos comprimentos de onda baseados em óptica integrada para fronthaul e backhaul de redes 5G de nova geração.', status: 'Em andamento', period: '2021 – presente', funder: 'CNPq / FAPEMIG', color: '#003366' },
      { title: 'Sensores Chipless RFID para IoT Industrial', desc: 'Pesquisa e desenvolvimento de etiquetas RFID sem circuito integrado ativo para rastreamento e sensoriamento em ambientes industriais e biomédicos.', status: 'Em andamento', period: '2020 – presente', funder: 'CAPES / Honeywell', color: '#1B6EDB' },
    ],
    funders: ['CNPq', 'CAPES', 'FAPEMIG'],
    partners: ['Honeywell', 'OneRF', 'Advantech', 'Mackenzie', 'USP-SC', 'UFSCar', 'INATEL'],
  },

  /* ── OSA ── */
  osa: {
    pageTitle: 'Optica Student Chapter',
    pageSub: 'Capítulo estudantil da Optica Society (antiga OSA) na UNIFEI, promovendo ciência e conexões globais.',
    aboutLabel: 'Sobre o Capítulo',
    aboutTitle: 'Fotônica & Conexão Internacional',
    aboutP1: 'O LabTel abriga o Capítulo Estudantil da Optica (anteriormente conhecida como Optical Society of America – OSA) na Universidade Federal de Itajubá. A Optica é a principal sociedade científica mundial dedicada à óptica e fotônica.',
    aboutP2: 'O capítulo promove o desenvolvimento científico e profissional de estudantes de graduação e pós-graduação interessados em fotônica, lasers, sensores ópticos e comunicações ópticas. Através de eventos, workshops e conexões internacionais, estreitamos laços com a comunidade global de pesquisa.',
    osaLink: 'Visitar optica.org →',
    activitiesLabel: 'Atividades & Eventos',
    joinLabel: 'Participe',
    joinTitle: 'Como se Juntar ao Capítulo',
    joinText: 'Estudantes de graduação e pós-graduação da UNIFEI interessados em óptica, fotônica e telecomunicações são bem-vindos. O capítulo é aberto e gratuito para membros da Optica Society.',
    joinContact: 'Contato:',
    activities: [
      { title: 'Workshops Técnicos', desc: 'Palestras e hands-on sobre tópicos de ponta em fotônica, Silicon Photonics e redes ópticas.' },
      { title: 'Seminários Científicos', desc: 'Apresentação de trabalhos de pesquisa pelos membros do laboratório e pesquisadores convidados.' },
      { title: 'Eventos de Networking', desc: 'Encontros informais para conectar estudantes, pesquisadores e profissionais da indústria.' },
      { title: 'Visitas Técnicas', desc: 'Visitas a empresas e centros de pesquisa parceiros para conhecer aplicações reais.' },
      { title: 'Publicações e Divulgação', desc: 'Produção de conteúdo científico e participação em congressos da Optica Society.' },
    ],
  },

  /* ── Notícias ── */
  noticias: {
    pageTitle: 'Notícias & Eventos',
    pageSub: 'Acompanhe as últimas atividades, publicações e eventos do LabTel.',
    news: [
      { date: 'Set 2022', tag: 'Evento', title: 'III Workshop LabTel-LAIoT', desc: 'Óptica, Fotônica e redes 5G: a integração e conectividade dos sistemas de telecomunicações. Evento realizado no auditório da UNIFEI.', accent: '#003366' },
      { date: 'Jun 2022', tag: 'Publicação', title: 'Pesquisa em Sistemas RoF Publicada no SBrT 2022', desc: 'Trabalho sobre sistema RoF/BS-ILC com transmissor de múltiplos comprimentos de onda baseado em óptica integrada apresentado no Simpósio Brasileiro de Telecomunicações.', accent: '#1B6EDB' },
      { date: 'Out 2021', tag: 'Conferência', title: 'Participação no ELOS 2021', desc: 'Pesquisadores do LabTel apresentaram técnicas de fotônica de micro-ondas para sistemas 5G/6G fibra-wireless no European Lasers, Photonics and Optics Technologies Summit.', accent: '#2E86E8' },
      { date: 'Ago 2021', tag: 'Defesa', title: 'Defesa de Dissertação de Mestrado', desc: 'Aluno do LabTel defende dissertação sobre sistemas RFID sem chip para aplicações de sensoriamento em ambientes IoT.', accent: '#003366' },
      { date: 'Mar 2021', tag: 'Palestra', title: 'Pesquisas em 5G no Mackenzie', desc: 'O Prof. Spadoti apresentou resultados recentes de pesquisa sobre 5G no ciclo de seminários da Escola de Engenharia Mackenzie.', accent: '#1B6EDB' },
      { date: 'Nov 2020', tag: 'Conferência', title: 'Apresentação no IWOC 2020', desc: 'Pesquisa sobre redes óptico-wireless foi apresentada no Inefor Workshop on Optical Communications, com destaque para técnicas de RoF.', accent: '#2E86E8' },
    ],
  },

  /* ── Galeria ── */
  galeria: {
    pageTitle: 'Galeria de Fotos',
    pageSub: 'Registros do dia a dia do laboratório: eventos, workshops, defesas e a equipe em ação.',
  },

  /* ── Contato ── */
  contato: {
    pageTitle: 'Contato',
    pageSub: 'Entre em contato com o LabTel para pesquisa, parcerias ou visitas ao laboratório.',
    infoLabel: 'Informações',
    infoTitle: 'Como nos Contatar',
    instName: 'IESTI / UNIFEI',
    howLabel: 'Como Chegar',
    howTitle: 'Chegando ao LabTel',
    howSub: 'O laboratório está localizado no campus da UNIFEI em Itajubá, MG.',
    howItems: [
      { title: 'De Carro', desc: 'O campus da UNIFEI fica na Av. BPS, 1303, Bairro Pinheirinho. Há estacionamento disponível na universidade.', color: '#003366' },
      { title: 'De Ônibus', desc: 'Linhas urbanas de Itajubá conectam o centro da cidade ao campus da UNIFEI. Consulte o horário local.', color: '#1B6EDB' },
    ],
  },
}
