<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__brand-name">LabTel</div>
        <div class="footer__brand-sub">{{ t.footer.inst }}</div>
      </div>
      <nav class="footer__nav">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="footer__link">
          {{ link.label }}
        </RouterLink>
      </nav>
      <div class="footer__rights">{{ t.footer.rights }}</div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '../stores/lang.js'

const lang = useLangStore()
const t = computed(() => lang.t)

const links = computed(() => [
  { to: '/sobre',        label: t.value.nav.about },
  { to: '/pesquisa',     label: t.value.nav.research },
  { to: '/equipe',       label: t.value.nav.team },
  { to: '/publicacoes',  label: t.value.nav.publications },
  { to: '/contato',      label: t.value.nav.contact },
])
</script>

<style scoped>
.footer {
  padding: 44px 0;
  background: #1A2540;
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer__brand-name {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}
.footer__brand-sub {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.38);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.footer__nav {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.footer__link {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.45);
  transition: color 0.2s;
  text-decoration: none;
}
.footer__link:hover { color: rgba(255,255,255,0.9); }
.footer__rights {
  font-size: 0.74rem;
  color: rgba(255,255,255,0.28);
}
@media (max-width: 768px) {
  .footer__inner { flex-direction: column; align-items: flex-start; }
}
</style>
