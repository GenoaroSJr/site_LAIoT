<template>
    <div>
        <h5>Teses</h5>
        <these-component v-for="(these, indice) in theses.teses" :key="indice" :dados="these" />

        <h5>Dissertações</h5>
        <these-component v-for="(these, indice) in theses.dissertacoes" :key="indice" :dados="these" />
    </div>
</template>

<script>
import TheseComponent from '@/components/BodyPage/Theses/TheseComponent'
import { mapState } from 'vuex'

export default {
    name: 'ThesesComponent',
    components: {
        TheseComponent
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            emAndamento: state => state.theses.emAndamento,
            finalizados: state => state.theses.finalizados,
        }),
        theses() {
            switch (this.tipo) {
                case 'emAndamento': return this.emAndamento
                case 'finalizados': return this.finalizados
            }
            return []
        }
    }
}
</script>