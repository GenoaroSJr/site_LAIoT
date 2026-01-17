<template>
    <div>
        <team-member-component 
            v-for="(membro, indice) in membros"
            :key="indice"
            :dados="membro"
            :tipo="tipo"
        />
    </div>
</template>

<script>
import TeamMemberComponent from '@/components/BodyPage/Team/TeamMemberComponent.vue';
import {mapState} from 'vuex'

export default {
    name: 'MembersComponent',
    components: {
        TeamMemberComponent
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            professor: state => state.membros.professor,
            posDoutorado: state => state.membros.posDoutorado,
            doutorado: state => state.membros.doutorado,
            mestrado: state => state.membros.mestrado,
            graduando: state => state.membros.graduando,
            membroAntigo: state => state.membros.membroAntigo
        }),
        membros() {
            switch (this.tipo) {
                case 'professor': return this.professor
                case 'pos-doutorado': return this.posDoutorado
                case 'doutorado': return this.doutorado
                case 'mestrado': return this.mestrado
                case 'graduando': return this.graduando
                case 'membro-antigo': return this.membroAntigo
            }
            return []
        }
    }
}
</script>
