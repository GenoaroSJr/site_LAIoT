<template>
    <div>
        <!-- {{ topicos }} -->
        <div class="card mb-3 bg-info bg-gradient">
            <div class="row g-0">
                <div class="col-md-12">
                    <div class="card-body">
                        <h3 class="card-title">{{ topicos[0].linhaDePesquisa }}</h3>
                        <p class="card-text">
                            {{ topicos[0].texto }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        

        <research-component v-for="(pesquisa, indice) in topicos[0].pesquisas" :key="indice" :dados="pesquisa" />

    </div>
</template>

<script>
import { mapState } from 'vuex'
import ResearchComponent from '@/components/BodyPage/Research/ResearchComponent.vue'

export default {
    components: { ResearchComponent },
    name: "ResearchTopicsComponent",
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            optica: state => state.pesquisa.optica,
            fibraOptica: state => state.pesquisa.fibraOptica,
            antenas: state => state.pesquisa.antenas,
            terahertz: state => state.pesquisa.terahertz,
            laiot: state => state.pesquisa.laiot,
        }),
        topicos() {
            switch (this.tipo) {
                case 'optica': return this.optica
                case 'fibra-optica': return this.fibraOptica
                case 'antenas': return this.antenas
                case 'terahertz': return this.terahertz
                case 'laiot': return this.laiot
            }
            return []
        }
    }
}
</script>

<style scoped>
.bg-info {
    background-color: #BDEBFA !important;
}
</style>
