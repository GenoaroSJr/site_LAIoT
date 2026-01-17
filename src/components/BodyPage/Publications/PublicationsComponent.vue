<template>
    <div>
        <h5>Revistas</h5>
        <publication-component 
        v-for="(publicacao, indice) in publicacoes.Revista" 
        :key="indice" 
        :dados="publicacao"
        />

        <h5>Congressos</h5>
        <publication-component 
        v-for="(publicacao, indice) in publicacoes.Congresso" 
        :key="indice" 
        :dados="publicacao"
        />
    </div>
</template>

<script>
import PublicationComponent from '@/components/BodyPage/Publications/PublicationComponent.vue';
import { mapState } from 'vuex'

export default {
    name: 'PublicationsComponent',
    components: {
        PublicationComponent
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            vinteCinco: state => state.publicacoes.vinteCinco,
            vinteQuatro: state => state.publicacoes.vinteQuatro,
            vinteTres: state => state.publicacoes.vinteTres,
            vinteDois: state => state.publicacoes.vinteDois,
            vinteUm: state => state.publicacoes.vinteUm,
            vinte: state => state.publicacoes.vinte,
            dezenove: state => state.publicacoes.dezenove,
            dezoito: state => state.publicacoes.dezoito,
            dezesete: state => state.publicacoes.dezesete,
            dezeseis: state => state.publicacoes.dezeseis,
            quinze: state => state.publicacoes.quinze,

        }),
        publicacoes() {
            switch (this.tipo) {
                case 'vinteCinco': return this.vinteCinco
                case 'vinteQuatro': return this.vinteQuatro
                case 'vinteTres': return this.vinteTres
                case 'vinteDois': return this.vinteDois
                case 'vinteUm': return this.vinteUm
                case 'vinte': return this.vinte
                case 'dezenove': return this.dezenove
                case 'dezoito': return this.dezoito
                case 'dezesete': return this.dezesete
                case 'dezeseis': return this.dezeseis
                case 'quinze': return this.quinze
            }
            return []
        }
    }
}
</script>