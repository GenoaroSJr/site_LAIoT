<template>
    <div>
        <event-header-component />
        <events-component />
    </div>
</template>

<script>
import EventHeaderComponent from '@/components/BodyPage/Headers/EventHeaderComponent.vue'
import EventsComponent from '@/components/BodyPage/Events/EventsComponent.vue'

export default {
 name: 'EventSection',
 components: {
    EventHeaderComponent,
    EventsComponent
 }
}
</script>