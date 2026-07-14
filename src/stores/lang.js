import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import pt from '../locales/pt.js'
import en from '../locales/en.js'

const locales = { pt, en }

export const useLangStore = defineStore('lang', () => {
  const current = ref(localStorage.getItem('labtel_lang') || 'pt')

  const t = computed(() => locales[current.value])

  function toggle() {
    current.value = current.value === 'pt' ? 'en' : 'pt'
    localStorage.setItem('labtel_lang', current.value)
  }

  function set(lang) {
    if (locales[lang]) {
      current.value = lang
      localStorage.setItem('labtel_lang', lang)
    }
  }

  return { current, t, toggle, set }
})
