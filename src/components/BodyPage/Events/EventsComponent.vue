<template>
    <div>
        <event-component v-for="(event, indice) in events" :key="indice" :dados="event" />
    </div>
</template>
  
<script>
import EventComponent from "@/components/BodyPage/Events/EventComponent.vue"
import { mapState } from 'vuex'

export default {
    components: { EventComponent },
    name: "EventsComponent",
    computed: {
        ...mapState({
            events: state => state.events
        })  
    }
};
</script>
  
<style scoped>
/* .card-icon {
    background-color: lightblue;
} */

.card-body {
    text-align: center;
}

.bi-caret-right-fill {
    /* Certifique-se de que o ícone não tenha margens para evitar desalinhamentos */
    margin: 0;
}
</style>
  