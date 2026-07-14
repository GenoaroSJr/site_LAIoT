<template>
  <PageHeader :title="p.pageTitle" :sub="p.pageSub" />

  <!-- Projetos em andamento -->
  <section class="section section--white">
    <div class="container">
      <SectionHeader :label="p.projectsLabel" :title="p.projectsTitle" :sub="p.projectsSub" narrow />
      <div class="proj-grid">
        <div v-for="proj in p.projects" :key="proj.title" class="proj-card">
          <div class="proj-card__bar" :style="{ background: proj.color }"></div>
          <div class="proj-card__header">
            <span class="tag">{{ proj.status }}</span>
            <span class="proj-period">{{ proj.period }}</span>
          </div>
          <h3 class="proj-title">{{ proj.title }}</h3>
          <p class="proj-desc">{{ proj.desc }}</p>
          <div class="proj-funder">
            <span class="proj-funder__label">{{ p.fundedBy }}</span>
            <span class="proj-funder__name">{{ proj.funder }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Financiadores & Parceiros -->
  <section class="section section--soft">
    <div class="container section-grid-2">
      <div>
        <span class="badge-label">{{ p.fundersLabel }}</span>
        <h2 class="serif-h2">{{ p.fundersTitle }}</h2>
        <p class="body-sub">{{ p.fundersSub }}</p>
        <div class="pill-list">
          <div v-for="f in p.funders" :key="f" class="pill">{{ f }}</div>
        </div>
      </div>
      <div>
        <span class="badge-label">{{ p.partnersLabel }}</span>
        <h2 class="serif-h2">{{ p.partnersTitle }}</h2>
        <p class="body-sub">{{ p.partnersSub }}</p>
        <div class="pill-list">
          <div v-for="pt in p.partners" :key="pt" class="pill">{{ pt }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLangStore } from '../stores/lang.js'
import PageHeader from '../components/PageHeader.vue'
import SectionHeader from '../components/SectionHeader.vue'

const lang = useLangStore()
const p = computed(() => lang.t.projetos)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }
.section--soft  { background: var(--color-bg-soft); }

.proj-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }

.proj-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.22s;
}
.proj-card:hover { box-shadow: 0 8px 32px rgba(0,51,102,0.09); }
.proj-card__bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; }

.proj-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.proj-period { font-size: 0.76rem; color: var(--color-text-faint); font-weight: 500; }
.proj-title  { font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700; color: var(--color-text); line-height: 1.4; margin-bottom: 12px; }
.proj-desc   { font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.75; margin-bottom: 18px; }
.proj-funder { display: flex; gap: 8px; }
.proj-funder__label { font-size: 0.74rem; color: var(--color-text-subtle); font-weight: 600; }
.proj-funder__name  { font-size: 0.74rem; color: var(--color-primary); font-weight: 700; }

.serif-h2 { font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--color-text); line-height: 1.15; margin-bottom: 20px; }
.body-sub  { font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.78; margin-bottom: 28px; }

.pill-list { display: flex; flex-wrap: wrap; gap: 10px; }
.pill {
  padding: 10px 18px;
  background: white;
  border: 1.5px solid #D0DCEE;
  border-radius: var(--radius-sm);
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.04em;
  transition: all 0.2s;
}
.pill:hover { border-color: var(--color-primary); color: var(--color-primary); }

@media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr; } }
</style>
