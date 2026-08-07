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
    infraTitle: 'Equipamentos do Laboratório de Pesquisa',
    infraSub: 'Instrumentação disponível no LabTel para pesquisa experimental em óptica, radiofrequência e telecomunicações.',
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
    equipamentos: {
      headers: { equipamento: 'Equipamento', quantidade: 'Quantidade', empresa: 'Empresa', modelo: 'Modelo' },
      items: [
        { equipamento: 'Vector Network Analyzer', quantidade: 1, empresa: 'Deviser', modelo: 'NA7100A' },
        { equipamento: 'Spectrum Rider FPH', quantidade: 1, empresa: 'Rohde & Schwarz', modelo: 'Model 13' },
        { equipamento: 'Field Fox VNA', quantidade: 1, empresa: 'Keysight', modelo: 'N9923A' },
        { equipamento: 'Vector Signal Generator', quantidade: 1, empresa: 'Anritsu', modelo: 'MG3710A' },
        { equipamento: 'Oscilloscope – Digital Real Time', quantidade: 1, empresa: 'Tektronix', modelo: 'TDS 220' },
        { equipamento: 'Wattmeter', quantidade: 1, empresa: 'Bird', modelo: '43' },
        { equipamento: 'Switching Power Supply', quantidade: 2, empresa: 'ICEL Manaus', modelo: 'PS-3005' },
        { equipamento: 'Oscilloscope Digital Storage', quantidade: 1, empresa: 'Agilent Technologies', modelo: 'DSO-X-2002A' },
        { equipamento: 'Laboratory DC Power Supply', quantidade: 1, empresa: 'ICEL Manaus', modelo: 'PS-5000' },
        { equipamento: 'Digital Soldering Station', quantidade: 1, empresa: 'Pace', modelo: 'ST 50' },
        { equipamento: 'Digital Storage Oscilloscope', quantidade: 1, empresa: 'Atten', modelo: 'Ads1042c' },
        { equipamento: 'Mesa Óptica', quantidade: 1, empresa: 'ThorLabs', modelo: 'T1225QK' },
        { equipamento: 'Conjunto Suporte Rígido', quantidade: 1, empresa: 'ThorLabs', modelo: 'PTL803' },
        { equipamento: 'Laser Diode Controller', quantidade: 1, empresa: 'ThorLabs', modelo: 'LDC 205 C' },
        { equipamento: 'Temperature Controller', quantidade: 1, empresa: 'ThorLabs', modelo: 'TED 200 C' },
        { equipamento: 'Optical Power Meter', quantidade: 1, empresa: 'ThorLabs', modelo: 'PM 400' },
        { equipamento: 'Fiber Microscope', quantidade: 1, empresa: 'ThorLabs', modelo: 'FS 201' },
        { equipamento: 'Sistema de Laser HeNe', quantidade: 1, empresa: 'ThorLabs', modelo: 'HNL020L' },
        { equipamento: 'Optical Spectrum Analyzer', quantidade: 1, empresa: 'Anritsu', modelo: 'MS9740B' },
        { equipamento: 'Impressora 3D', quantidade: 1, empresa: 'GTMax3D', modelo: 'A2V2' },
        { equipamento: 'Proto-Board – Design Station', quantidade: 1, empresa: 'Global Specialties', modelo: 'PB-503-C' },
        { equipamento: 'Computadores', quantidade: 9, empresa: '-', modelo: '-' },
        { equipamento: 'Workstation', quantidade: 3, empresa: '-', modelo: 'HP Z2 Tower G4' },
        { equipamento: 'Televisão 50”', quantidade: 1, empresa: 'AOC', modelo: 'LE50U7970' },
        { equipamento: 'Retroprojetor', quantidade: 1, empresa: 'Epson', modelo: 'X39 3LCD' },
      ],
    },
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
