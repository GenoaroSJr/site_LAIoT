<template>
  <nav :class="['navbar', { 'navbar--scrolled': ui.navScrolled }]">
    <div class="container navbar__inner">
      <RouterLink to="/" class="navbar__logo" @click="ui.closeMobileMenu()">
        <span class="navbar__logo-name">LabTel</span>
        <span class="navbar__logo-sub">UNIFEI · IESTI</span>
      </RouterLink>

      <div :class="['navbar__links', { 'navbar__links--open': ui.mobileMenuOpen }]">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="navbar__link" @click="ui.closeMobileMenu()">
          {{ link.label }}
        </RouterLink>
        <button class="lang-toggle" @click="lang.toggle(); ui.closeMobileMenu()">
          {{ lang.t.nav.langToggle }}
        </button>
      </div>

      <button class="navbar__burger" @click="ui.toggleMobileMenu()" :aria-label="ui.mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '../stores/lang.js'
import { useUiStore } from '../stores/ui.js'

const lang = useLangStore()
const ui = useUiStore()

const links = computed(() => [
  { to: '/sobre',        label: lang.t.nav.about },
  { to: '/pesquisa',     label: lang.t.nav.research },
  { to: '/equipe',       label: lang.t.nav.team },
  { to: '/publicacoes',  label: lang.t.nav.publications },
  { to: '/teses',        label: lang.t.nav.theses },
  { to: '/projetos',     label: lang.t.nav.projects },
  { to: '/osa',          label: lang.t.nav.osa },
  { to: '/noticias',     label: lang.t.nav.news },
  { to: '/galeria',      label: lang.t.nav.gallery },
  { to: '/contato',      label: lang.t.nav.contact },
])
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 21px 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: padding 0.35s ease, background 0.35s ease, border-color 0.35s ease;
}
.navbar--scrolled {
  padding: 13px 0;
  background: rgba(0, 51, 102, 0.97);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: rgba(255,255,255,0.1);
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.navbar__logo {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-decoration: none;
}
.navbar__logo-name {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
}
.navbar__logo-sub {
  font-size: 0.67rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
}
.navbar__links {
  display: flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
}
.navbar__link {
  font-size: 0.84rem;
  color: rgba(255,255,255,0.72);
  font-weight: 500;
  transition: color 0.2s;
  text-decoration: none;
}
.navbar__link:hover,
.navbar__link.router-link-active {
  color: white;
  font-weight: 700;
}
.navbar__link.router-link-active {
  border-bottom: 1.5px solid rgba(255,255,255,0.4);
  padding-bottom: 2px;
}
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.navbar__burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.2s;
}

@media (max-width: 900px) {
  .navbar__burger { display: flex; }
  .navbar__links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(0,51,102,0.97);
    backdrop-filter: blur(14px);
    padding: 20px 20px 24px;
    gap: 14px;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .navbar__links--open { display: flex; }
}
</style>
