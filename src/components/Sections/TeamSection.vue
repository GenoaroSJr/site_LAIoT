<template>
    <div>
        <team-header-component />
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'TeamMember', params: { tipo: 'professor' } }">Professores</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'TeamMember', params: { tipo: 'pos-doutorado' } }">Pos-Doutorados</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'TeamMember', params: { tipo: 'doutorado' } }">Doutorados</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'TeamMember', params: { tipo: 'mestrado' } }">Mestrados</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'TeamMember', params: { tipo: 'graduando' } }">Graduandos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'TeamMember', params: { tipo: 'membro-antigo' } }">Membros
                    Antigos</router-link>
            </li>
        </ul>
        <router-view class="mt-2" />
    </div>
</template>

<script>
import TeamHeaderComponent from '@/components/BodyPage/Headers/TeamHeaderComponent.vue'

export default {
    name: "TeamSection",
    components: {
        TeamHeaderComponent
    },
    created() {
        this.$router.push({ name: 'TeamMember', params: { tipo: 'professor' } });
    }
    
}
</script>

<style scoped>
.router-link-exact-active{
    background-color: lightblue;
    color: black;
    font-weight: bold;
}

</style>
