import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const navScrolled = ref(false)
  const mobileMenuOpen = ref(false)

  function setNavScrolled(val) { navScrolled.value = val }
  function toggleMobileMenu() { mobileMenuOpen.value = !mobileMenuOpen.value }
  function closeMobileMenu() { mobileMenuOpen.value = false }

  return { navScrolled, mobileMenuOpen, setNavScrolled, toggleMobileMenu, closeMobileMenu }
})
