import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const navScrolled = ref(false)
  const mobileMenuOpen = ref(false)
  // Abre a cada carregamento da página; trocar de rota não recria o store.
  const bookingOpen = ref(true)

  function setNavScrolled(val) { navScrolled.value = val }
  function toggleMobileMenu() { mobileMenuOpen.value = !mobileMenuOpen.value }
  function closeMobileMenu() { mobileMenuOpen.value = false }
  function openBooking() { bookingOpen.value = true }
  function closeBooking() { bookingOpen.value = false }

  return {
    navScrolled, mobileMenuOpen, bookingOpen,
    setNavScrolled, toggleMobileMenu, closeMobileMenu, openBooking, closeBooking,
  }
})
