<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-2">
                <!-- Use a variável "imageUrl" para definir o caminho da imagem -->
                <img :src="imageUrl" class="img-fluid rounded-start" :alt="dados.nome">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">{{ dados.nome }}</h5>
                    <p class="card-text text-justify">{{ dados.texto }}</p>
                    <a :href="dados.lattes" target="_blank">
                        <p class="card-text"><small class="text-body-secondary">Lattes: {{ dados.lattes }}</small></p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamMemberComponent',
    props: {
        tipo: String,
        dados: Object,
    },
    computed: {
        imageUrl() {
            return require(`@/${this.dados.img}`)
        }
    }
}
</script>

<style>
.img-fluid {
    width: 100%;
}

.card-text {
    text-align: justify;
}
</style>
