export default {
  pageTitle: 'Research Areas',
  pageSub:
    "Explore LabTel's five research lines — Integrated Optics, Photonic Crystal Optical Fibers, Antennas and Propagation, Terahertz Devices, and LAIoT — spanning photonics, electromagnetics, and the Internet of Things to deliver innovative telecommunications solutions.",
  areaLabel: 'Research Line',
  lines: [
    {
      id: 'optica',
      num: '01',
      navLabel: 'Integrated Optics',
      title: 'Integrated Optics',
      texto:
        "In this research line, we focus our work on the so-called 'Silicon Photonics,' or more specifically, 'Silicon Nanophotonics,' which, besides being an emerging field of research and technology, is an innovation already present in new products. Our studies include advances in silicon or silicon nitride nano-devices, such as waveguides, optical resonators, and Bragg grating-based couplers. Within this line, the following computational simulations stand out:",
      subs: [
        {
          titulo: 'Optical Transformation and Invisibility',
          texto:
            'We seek to develop new strategies for performing mappings, in transformation optics, that result in a transformation whose resulting optical medium is isotropic or has low anisotropy. We study and investigate different coordinate transformations for planar waveguides, aiming to modify the trajectory of the electromagnetic wave and to develop devices such as waveguides, isotropic polarization splitters, and invisibility cloaks.',
          img: 'assets/imgs/pesquisa/optica1.jpg',
        },
        {
          titulo: 'Design and Modeling of Silicon Nanogratings',
          texto:
            'The optical coupling of nanophotonic devices can be achieved via Bragg gratings. Computational modeling of these gratings is essential for increasing the coupling efficiency between nanoscale waveguides and the conventional optical fibers of a telecommunications network. Thus, in this line, we simulate new structural arrangements of waveguides, reflective layers, and different doping profiles aiming to increase coupling efficiency.',
          img: 'assets/imgs/pesquisa/optica2.jpg',
        },
      ],
    },
    {
      id: 'fibraOptica',
      num: '02',
      navLabel: 'Optical Fibers',
      title: 'Photonic Crystal Optical Fibers',
      texto:
        'This research line focuses on investigating this new class of optical fibers, based on the concept of photonic crystals, called photonic crystal fiber (PCF) or microstructured optical fiber (MOF). Its particular geometry, with materials of different refractive indices structured periodically, allows for high design flexibility. It is therefore possible to adjust, as needed, properties such as dispersion, effective area, and confinement losses, among others, which makes these fibers especially useful for applications in optical communications. Within this line, the following computational simulations stand out:',
      subs: [
        {
          titulo: 'Optical Sensing',
          texto:
            "Chromatic dispersion is one of the main limiting factors in current fiber-optic data transmission systems. Therefore, the development of optical devices capable of compensating for this undesirable effect is essential. Photonic crystal optical fibers used for dispersion compensation stand out, due to their geometry, for their high flexibility in the design of dispersion curves. In this line, we seek to appropriately manipulate the geometric and structural parameters of PCFs in order to adjust the fibers' chromatic dispersion values according to need and application.",
          img: 'assets/imgs/pesquisa/imagemSensoriamentoOptico.jpg',
        },
      ],
    },
    {
      id: 'antenas',
      num: '03',
      navLabel: 'Antennas and Propagation',
      title: 'Antennas and Propagation',
      texto:
        'This research line focuses on the theoretical and practical investigation of new antennas and antenna arrays capable of operating with maximum efficiency and high gain, featuring self-tuning, and that can also be optically controlled. With this, we can develop antennas operating over wide bandwidths and/or capable of operating in different frequency ranges. Within this line, the following simulations and experiments stand out:',
      subs: [
        {
          titulo: 'Wireless Power Transfer',
          texto:
            "It is known that wireless power transmission efficiency is directly related to the separation distance between the transmitting and receiving devices. Furthermore, power transfer is extremely sensitive to the system's resonant operating frequency. Thus, we seek to develop, analytically, numerically, and experimentally, self-tunable wireless power transfer devices capable of always operating at the point of maximum efficiency.",
          img: 'assets/imgs/pesquisa/imagemAntenaSemfio.jpg',
        },
        {
          titulo: 'Lens-Assisted Broadband Antennas',
          texto:
            'In this line, we simulate new structural arrangements of waveguides, reflective layers, and different doping profiles aiming to increase coupling efficiency.',
          img: 'assets/imgs/pesquisa/imagemAntenaBanda2.jpg',
        },
        {
          titulo: 'Optically Controlled Antennas',
          texto:
            "In this application, we seek to develop antennas with reconfigurable, optically controlled radiation patterns, operating in the millimeter-wave frequency range. Silicon switches are used to control the optical reconfiguration, modifying the antenna's frequency response and radiation pattern. Therefore, we design and develop new antenna structures and arrangements, optically controlled by the optical switch, which exhibits an extremely fast response. This project is developed in partnership with the WOCA group at INATEL.",
          img: 'assets/imgs/pesquisa/imagemAntenaControlada.jpg',
        },
      ],
    },
    {
      id: 'terahertz',
      num: '04',
      navLabel: 'Terahertz',
      title: 'Terahertz Devices',
      texto:
        'Modeling of the electro-optic effect in LID devices, for applications in modulators operating in the THz range. The goal of this project is to develop an electro-optic modulator applying the technique of electromagnetic wave confinement in the medium with the lower refractive index, through the discontinuity at the interface between the media, as occurs in devices known as LIDs. To this end, the electro-optic effect is investigated in anisotropic crystals belonging to this category of optical devices.',
      subs: [],
    },
    {
      id: 'laiot',
      num: '05',
      navLabel: 'LAIoT',
      title: 'LAIoT – Internet of Things Application Laboratory',
      texto:
        "A recently created laboratory, a spin-off of LabTel, dedicated to research in the RF and communications field. Specialized in connectivity between machines and 'things,' this laboratory develops research applied to energy efficiency and system range. We have carried out practical studies with new IoT technologies, highlighting: LoRaWan, Sigfox, and NB-IoT.",
      subs: [],
    },
  ],
  equipamentos: {
    navLabel: 'Equipment',
    label: 'Infrastructure',
    title: 'Laboratory Equipment',
    sub: 'Instrumentation available at LabTel for experimental research in optics, radio frequency and telecommunications.',
    headers: { equipamento: 'Equipment', quantidade: 'Quantity', empresa: 'Company', modelo: 'Model' },
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
      { equipamento: 'Optical Table', quantidade: 1, empresa: 'ThorLabs', modelo: 'T1225QK' },
      { equipamento: 'Rigid Support Set', quantidade: 1, empresa: 'ThorLabs', modelo: 'PTL803' },
      { equipamento: 'Laser Diode Controller', quantidade: 1, empresa: 'ThorLabs', modelo: 'LDC 205 C' },
      { equipamento: 'Temperature Controller', quantidade: 1, empresa: 'ThorLabs', modelo: 'TED 200 C' },
      { equipamento: 'Optical Power Meter', quantidade: 1, empresa: 'ThorLabs', modelo: 'PM 400' },
      { equipamento: 'Fiber Microscope', quantidade: 1, empresa: 'ThorLabs', modelo: 'FS 201' },
      { equipamento: 'HeNe Laser System', quantidade: 1, empresa: 'ThorLabs', modelo: 'HNL020L' },
      { equipamento: 'Optical Spectrum Analyzer', quantidade: 1, empresa: 'Anritsu', modelo: 'MS9740B' },
      { equipamento: '3D Printer', quantidade: 1, empresa: 'GTMax3D', modelo: 'A2V2' },
      { equipamento: 'Proto-Board – Design Station', quantidade: 1, empresa: 'Global Specialties', modelo: 'PB-503-C' },
      { equipamento: 'Computers', quantidade: 9, empresa: '-', modelo: '-' },
      { equipamento: 'Workstation', quantidade: 3, empresa: '-', modelo: 'HP Z2 Tower G4' },
      { equipamento: '50” Television', quantidade: 1, empresa: 'AOC', modelo: 'LE50U7970' },
      { equipamento: 'Projector', quantidade: 1, empresa: 'Epson', modelo: 'X39 3LCD' },
    ],
  },
}
