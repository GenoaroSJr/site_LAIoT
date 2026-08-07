export default {
  pageTitle: 'Áreas de Pesquisa',
  pageSub:
    'Conheça as cinco linhas de pesquisa do LabTel — Óptica Integrada, Fibras Ópticas de Cristal Fotônico, Antenas e Propagação, Dispositivos em Terahertz e o LAIoT — unindo fotônica, eletromagnetismo e Internet das Coisas em soluções inovadoras para telecomunicações.',
  areaLabel: 'Linha de Pesquisa',
  lines: [
    {
      id: 'optica',
      num: '01',
      navLabel: 'Óptica Integrada',
      title: 'Óptica Integrada',
      texto:
        "Nesta linha de pesquisa focamos nossos trabalhos na chamada 'Fotônica do Silício' (Silicon Photonics), ou mais especificamente, 'Nanofotônica do Silício', que além de ser um campo emergente de pesquisa e tecnologia é uma realidade de inovação presente em novos produtos. Nossos estudos incluem avanços em nano-dispositivos de silício ou nitreto de silício, tais como: guias de onda, ressonadores ópticos e acopladores baseados em grades de Bragg. Dentro desta linha, destacam-se as simulações computacionais em:",
      subs: [
        {
          titulo: 'Transformada Óptica e Invisibilidade',
          texto:
            'Busca-se desenvolver novas estratégias para a realização de mapeamentos, em óptica transformacional, que resultem em uma transformação cujo meio óptico resultante seja isotrópico ou com baixa anisotropia. Estudamos e investigamos diferentes transformações de coordenadas para guias de onda planares, cujos objetivos são modificar a trajetória da onda eletromagnética e desenvolver dispositivos como guias de ondas, divisores de polarização isotrópicos a mantos de invisibilidade.',
          img: 'assets/imgs/pesquisa/optica1.jpg',
        },
        {
          titulo: 'Design e Modelagem de Nano Grades de Silício',
          texto:
            'O acoplamento óptico dos dispositivos nanofotônicos pode ser realizado via Grades de Bragg. A modelagem computacional dessas grades é fundamental para aumentar a eficiência de acoplamento entre os guias em nano-escalas e as convencionais fibras ópticas de uma rede de telecomunicações. Assim, nesta linha, simulamos novos arranjos estruturais dos guias, camadas refletoras e diferentes dopagens visando aumentar a eficiência de acoplamento.',
          img: 'assets/imgs/pesquisa/optica2.jpg',
        },
      ],
    },
    {
      id: 'fibraOptica',
      num: '02',
      navLabel: 'Fibras Ópticas',
      title: 'Fibras Ópticas de Cristal Fotônico',
      texto:
        'Nesta linha de pesquisa o foco é na investigação desta nova classe de fibras ópticas, baseada no conceito de cristais fotônicos, denominada fibra óptica de cristal fotônico (PCF - Photonic Crystal Fiber) ou fibra microestruturada (MOF - Microstructured Optical Fiber). Sua geometria particular, com materiais de diferentes índices de refração estruturados de forma periódica, permite uma alta flexibilidade de projeto. Consegue-se, portanto, ajustar, conforme a necessidade, as propriedades de dispersão, área efetiva, perdas por confinamento, entre outras, o que torna estas fibras especialmente úteis para aplicações em comunicações ópticas. Dentro desta linha, destacam-se as simulações computacionais em:',
      subs: [
        {
          titulo: 'Sensoriamento Óptico',
          texto:
            'A dispersão cromática é um dos principais fatores limitantes nos atuais sistemas de transmissão de dados via fibra óptica. Logo, é fundamental o desenvolvimento de dispositivos ópticos capazes de compensar esse indesejado efeito. As fibras ópticas de cristal fotônico empregadas para compensação de dispersão, devido à sua geometria, destacam-se pela sua alta maleabilidade no projeto de curvas de dispersão. Nesta linha, buscamos manipular adequadamente os parâmetros geométricos e estruturais das PCFs para alterar, conforme necessidade e aplicação, os valores da dispersão cromática das fibras.',
          img: 'assets/imgs/pesquisa/imagemSensoriamentoOptico.jpg',
        },
      ],
    },
    {
      id: 'antenas',
      num: '03',
      navLabel: 'Antenas e Propagação',
      title: 'Antenas e Propagação',
      texto:
        'Nesta linha de pesquisa o foco é na investigação teórica e prática de novas antenas e arranjos de antenas capazes de atuarem, com máxima eficiência, alto ganho, apresentarem auto-sintonia e, também, podendo ser opticamente controladas. Com isso, podemos desenvolver antenas operando em banda larga e ou podendo operar em diferentes faixas de frequências. Dentro desta linha, destacam-se as simulações e experimentos em:',
      subs: [
        {
          titulo: 'Transferência de energia sem fios',
          texto:
            'Sabe-se que a eficiência na transmissão de energia sem fios está diretamente relacionada com a distância de separação entre o dispositivo transmissor e receptor. Ademais, a transferência de energia é extremamente sensível à frequência de ressonância de operação do sistema. Assim, buscamos desenvolver analítica, numérica, e experimentalmente dispositivos para transferência de energia sem fios, auto-sintonizáveis, capazes de operar sempre no ponto de máxima eficiência.',
          img: 'assets/imgs/pesquisa/imagemAntenaSemfio.jpg',
        },
        {
          titulo: 'Antenas banda-larga assistidas por lentes',
          texto:
            'Nesta linha, simulamos novos arranjos estruturais dos guias, camadas refletoras e diferentes dopagens visando aumentar a eficiência de acoplamento.',
          img: 'assets/imgs/pesquisa/imagemAntenaBanda2.jpg',
        },
        {
          titulo: 'Antenas opticamente controladas',
          texto:
            'Nesta aplicação, busca-se desenvolver antenas que apresentem padrões reconfiguráveis e controladas opticamente, operando na faixa de frequência de onda milimétrica. Chaves de silício são usadas para controlar a reconfiguração óptica, modificando a resposta em frequência e o padrão de radiação da antena. Portanto, projetamos e desenvolvemos novas estruturas e arranjos de antenas, controlados opticamente pela chave óptica, a qual apresenta resposta extremamente rápida. Este projeto é desenvolvido em parceria com o grupo WOCA do INATEL.',
          img: 'assets/imgs/pesquisa/imagemAntenaControlada.jpg',
        },
      ],
    },
    {
      id: 'terahertz',
      num: '04',
      navLabel: 'Terahertz',
      title: 'Dispositivos em Terahertz',
      texto:
        'Modelagem do efeito eletro-óptico em dispositivos LID, para aplicações em moduladores que operam na faixa dos THz. O objetivo deste projeto é desenvolver um modulador eletro-óptico aplicando a técnica de confinamento da onda eletromagnética no meio com menor índice de refração, através da descontinuidade na interface entre os meios, tal como ocorre nos dispositivos conhecidos como LIDs. Para tanto, investiga-se o efeito eletro-óptico em cristais anisotrópicos pertencentes a esta categoria de dispositivos ópticos.',
      subs: [],
    },
    {
      id: 'laiot',
      num: '05',
      navLabel: 'LAIoT',
      title: 'LAIoT – Laboratório de Aplicação em Internet Das Coisas',
      texto:
        "Laboratório recém-criado como um SpinOff do LabTel, para desenvolvimento de pesquisas na área de RF e comunicações. Especializado em conectividade entre máquinas e 'coisas', este laboratório desenvolve pesquisa aplicada à eficiência energética e alcance do sistema. Temos desenvolvido estudos práticos com as novas tecnologias IoT, destacando: LoRaWan, Sigfox e NB-IoT.",
      subs: [],
    },
  ],
}
