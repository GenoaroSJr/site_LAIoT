<template>
  <TheNavbar />
  <main>
    <RouterView />
  </main>
  <TheFooter />
  <EventPopup />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import EventPopup from './components/EventPopup.vue'
import { useUiStore } from './stores/ui.js'

const ui = useUiStore()

function onScroll() {
  ui.setNavScrolled(window.scrollY > 55)
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
main { padding-top: 0; }
</style>
