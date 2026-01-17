<template>
    <div>
        <publications-header-component />
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'vinteCinco' } }">2025</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'vinteQuatro' } }">2024</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'vinteTres' } }">2023</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'vinteDois' } }">2022</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'vinteUm' } }">2021</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'vinte' } }">2020</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'dezenove' } }">2019</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"
                    :to="{ name: 'Publications', params: { tipo: 'dezoito' } }">2018</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" 
                    :to="{ name: 'Publications', params: { tipo: 'dezesete' } }">2017</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" 
                    :to="{ name: 'Publications', params: { tipo: 'dezeseis' } }">2016</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" 
                    :to="{ name: 'Publications', params: { tipo: 'quinze' } }">2015</router-link>
            </li>
        </ul>
        <router-view class="mt-2" />
    </div>
</template>

<script>
import PublicationsHeaderComponent from '@/components/BodyPage/Headers/PublicationsHeaderComponent.vue';

export default {
    name: 'PublicationsSection',
    components: {
        PublicationsHeaderComponent
    },
    created() {
        this.$router.push({ name: 'Publications', params: { tipo: 'vinteCinco' } });
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