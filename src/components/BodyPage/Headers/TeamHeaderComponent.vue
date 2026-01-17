<template>
    <div>
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div class="col-md-12 px-0">
                <h1 id="titulo" class="display-4 fst-italic">LabIoT & LabTel - Equipe</h1>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-12">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
                    <div class="col-12 d-none text-center d-lg-block">
                        <img class="w-100" :src="require(`@/${img}`)">
                    </div>
                    <div class="col p-4 d-flex flex-column position-static">
                        <h3 id="somos" class="mb-2 text-center">Quem somos</h3>
                        <p id="textoSomos">
                            O grupo de
                            Telecomunicações da UNIFEI está voltado para pesquisa básica na área de eletromagnetismo e
                            propagação de ondas eletromagnéticas. Neste vasto campo de pesquisas em eletromagnetismo,
                            estamos diretamente interessados em três áreas: óptica e fotônica, radiofrequência (RF),
                            propagação de ondas e antenas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamHeaderComponent',
    data: () => ({
        img: 'assets/imgs/equipe/equipe.jpeg'
    })
}
</script>