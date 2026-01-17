<template>
    <div>
        <research-line-header-component />
        <tools-list />
        <!-- Topicos -->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'ResearchLine', params: { tipo: 'optica' } }">Óptica Integrada:</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'ResearchLine', params: { tipo: 'fibra-optica' } }">Fibras Ópticas de Cristal Fotônico:</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'ResearchLine', params: { tipo: 'antenas' } }">Antenas e Propagação:</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'ResearchLine', params: { tipo: 'terahertz' } }">Dispositivos em Terahertz:
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'ResearchLine', params: { tipo: 'laiot' } }">LAIoT - Laboratório de Aplicação em Internet Das Coisas:</router-link>
            </li>
        </ul>
        <router-view class="mt-2"/>
    </div>
</template>

<script>
import ResearchLineHeaderComponent from '../BodyPage/Headers/ResearchLineHeaderComponent.vue'
import ToolsList from '@/components/BodyPage/Research/ToolsList.vue'

export default {
    name: "ResearchLinesSection",
    components: { ResearchLineHeaderComponent, ToolsList },
    created() {
        this.$router.push({ name: 'ResearchLine', params: { tipo: 'optica' } });
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
