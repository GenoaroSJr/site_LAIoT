import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const navScrolled = ref(false)
  const mobileMenuOpen = ref(false)
  // Abre a cada carregamento da página; trocar de rota não recria o store.
  const eventOpen = ref(true)

  function setNavScrolled(val) { navScrolled.value = val }
  function toggleMobileMenu() { mobileMenuOpen.value = !mobileMenuOpen.value }
  function closeMobileMenu() { mobileMenuOpen.value = false }
  function openEvent() { eventOpen.value = true }
  function closeEvent() { eventOpen.value = false }

  return {
    navScrolled, mobileMenuOpen, eventOpen,
    setNavScrolled, toggleMobileMenu, closeMobileMenu, openEvent, closeEvent,
  }
})
