<template>
    <div>
        <theses-header-component />
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Theses', params: { tipo: 'emAndamento' } }">Em Andamento</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Theses', params: { tipo: 'finalizados' } }">Finalizados</router-link>
            </li>
        </ul>
        <router-view class="mt-2" />
    </div>
</template>

<script>
import ThesesHeaderComponent from '@/components/BodyPage/Headers/ThesesHeaderComponent.vue'

export default {
    name: 'ThesesAndDissertationsSection',
    components: {
        ThesesHeaderComponent
    },
    created() {
        this.$router.push({ name: 'Theses', params: { tipo: 'emAndamento' } });
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