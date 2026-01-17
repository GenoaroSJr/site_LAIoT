<template>
    <div class="row mb-2 mt-4">
        <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
                <div class="col-md-12 p-4 d-flex flex-column position-static">
                    <!-- <strong class="d-inline-block mb-2 text-primary">LabIoT</strong> -->
                    <h3 id="fazemos" class="mb-2">O que fazemos</h3>
                    <p id="textoFazemos" class="card-text mb-auto" style="text-align: justify;">
                        Na área de óptica e fotônica, atuamos na fronteira do conhecimento ao desenvolver dispositivos
                        em escala nanométrica utilizando tecnologia do silício, no campo da Óptica Integrada (Silicon
                        Photonics). Esse enfoque em nanofotônica possibilita a miniaturização de componentes e o alcance
                        de elevadas taxas de transmissão de dados.
                    </p>
                    <router-link :to="{ name: 'LinhaDePesquisa' }">Continue lendo...</router-link>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
                <div class="col-md-12 p-4 d-flex flex-column position-static">
                    <!-- <strong class="d-inline-block mb-2 text-primary">LabIoT</strong> -->
                    <h3 id="somos" class="mb-2">Quem somos</h3>
                    <p id="textoSomos" class="card-text mb-auto" style="text-align: justify;">
                        O grupo de Telecomunicações da UNIFEI está voltado para pesquisa básica na área de
                        eletromagnetismo
                        e
                        propagação de ondas eletromagnéticas. Neste vasto campo de pesquisas em eletromagnetismo,
                        estamos
                        diretamente
                        interessados em três áreas: óptica e fotônica, radiofrequência (RF), propagação de ondas e
                        antenas.
                    </p>
                    <router-link :to="{ name: 'Equipe' }">Continue lendo...</router-link>
                </div>
                <!-- <div class="col-md-4 d-none d-lg-block">
              -- mudar o col-md-12
          </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhoWhatComponent',
};
</script>

<style>
/* Your custom styles for the component */
</style>