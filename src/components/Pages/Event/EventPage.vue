<template>
    <div>
        <header-section />
        <body-section />
        <footer-section />
    </div>
</template>

<script>
import BodySection from '@/components/Pages/Event/Sections/BodySection.vue'
import FooterSection from '@/components/Pages/Event/Sections/FooterSection.vue'
import HeaderSection from '@/components/Pages/Event/Sections/HeaderSection.vue'
export default {
    components: { HeaderSection, BodySection, FooterSection },
    name: 'EventPage'
}
</script>