<template>
    <div>
        <div class="card mb-4" style="cursor: pointer;">
            <div class="card-header" @click="toggleList" >
                Lista de Equipamentos <small style="color: blue">(clique para ver a lista)</small>
            </div>
            <div v-if="showList" class="card-body">
                <div class="text-white p-1">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Equipamento</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Empresa</th>
                                <th scope="col">Modelo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vector Network Analyzer </td>
                                <td>1</td>
                                <td>Deviser</td>
                                <td>NA7100A</td>
                            </tr>
                            <tr>
                                <td>Spectrum Rider FPH </td>
                                <td>1</td>
                                <td>Rohde & Schwarz</td>
                                <td>Model 13</td>
                            </tr>
                            <tr>
                                <td>Field Fox VNA </td>
                                <td>1</td>
                                <td>Keysight</td>
                                <td>N9923A</td>
                            </tr>
                            <tr>
                                <td>Vector Signal Generator </td>
                                <td>1</td>
                                <td>Anritsu</td>
                                <td>MG3710A</td>
                            </tr>
                            <tr>
                                <td>Oscilloscope – Digital Real Time </td>
                                <td>1</td>
                                <td>Tektronix</td>
                                <td>TDS 220</td>
                            </tr>
                            <tr>
                                <td>Wattmeter </td>
                                <td>1</td>
                                <td>Bird</td>
                                <td>43</td>
                            </tr>
                            <tr>
                                <td>Switching Power Supply </td>
                                <td>2</td>
                                <td>ICEL Manaus</td>
                                <td>PS-3005</td>
                            </tr>
                            <tr>
                                <td>Oscilloscope Digital Storage </td>
                                <td>1</td>
                                <td>Agilent Technologies</td>
                                <td>DSO-X-2002A</td>
                            </tr>
                            <tr>
                                <td>Laboratory DC Power Supply </td>
                                <td>1</td>
                                <td>ICEL Manaus</td>
                                <td>PS-5000</td>
                            </tr>
                            <tr>
                                <td>Digital Soldering Station </td>
                                <td>1</td>
                                <td>Pace</td>
                                <td>ST 50</td>
                            </tr>
                            <tr>
                                <td>Digital Storage Oscilloscope </td>
                                <td>1</td>
                                <td>Atten</td>
                                <td>Ads1042c</td>
                            </tr>
                            <tr>
                                <td>Mesa Óptica </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>T1225QK</td>
                            </tr>
                            <tr>
                                <td>Conjunto Suporte Rígido </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>PTL803</td>
                            </tr>
                            <tr>
                                <td>Laser Diode Controller </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>LDC 205 C</td>
                            </tr>
                            <tr>
                                <td>Temperature Controller </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>TED 200 C</td>
                            </tr>
                            <tr>
                                <td>Optical Power Meter </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>PM 400</td>
                            </tr>
                            <tr>
                                <td>Fiber Microscope </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>FS 201</td>
                            </tr>
                            <tr>
                                <td>Sistema de Laser HeNe </td>
                                <td>1</td>
                                <td>ThorLabs</td>
                                <td>HNL020L</td>
                            </tr>
                            <tr>
                                <td>Optical Spectrum Analyzer </td>
                                <td>1</td>
                                <td>Anritsu</td>
                                <td>MS9740B</td>
                            </tr>
                            <tr>
                                <td>Impressora 3D </td>
                                <td>1</td>
                                <td>GTMax3D</td>
                                <td>A2V2</td>
                            </tr>
                            <tr>
                                <td>Proto-Board – Design Station </td>
                                <td>1</td>
                                <td>Global Specialties</td>
                                <td>PB-503-C</td>
                            </tr>
                            <tr>
                                <td>Computadores - </td>
                                <td>9</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Workstation </td>
                                <td>3</td>
                                <td>-</td>
                                <td>HP Z2 Tower G4</td>
                            </tr>
                            <tr>
                                <td>Televisão 50” </td>
                                <td>1</td>
                                <td>AOC</td>
                                <td>LE50U7970</td>
                            </tr>
                            <tr>
                                <td>Retroprojetor </td>
                                <td>1</td>
                                <td>Epson</td>
                                <td>X39 3LCD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ToolsList',
    data: () => ({
        showList: false,
    }),
    methods: {
        toggleList() {
            this.showList = !this.showList;
        },
    },
};
</script>
  