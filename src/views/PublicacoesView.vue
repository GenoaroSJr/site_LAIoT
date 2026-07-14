<template>
  <PageHeader :title="pub.pageTitle" :sub="pub.pageSub" />

  <section class="section section--soft">
    <div class="container">
      <!-- Filter bar -->
      <div class="filter-bar">
        <span class="filter-bar__label">{{ pub.filterLabel }}</span>
        <div class="filter-bar__btns">
          <button
            v-for="f in filters"
            :key="f.key"
            :class="['filter-btn', { 'filter-btn--active': filter === f.key }]"
            @click="filter = f.key"
          >{{ f.label }}</button>
        </div>
        <span class="filter-bar__label filter-bar__label--year">{{ pub.filterYearLabel }}</span>
        <select v-model="yearFilter" class="filter-select">
          <option value="all">{{ pub.filterYearAll }}</option>
          <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
        </select>
      </div>

      <!-- List -->
      <div class="pub-list">
        <div v-for="(p, i) in filteredPubs" :key="i + p.title" class="pub-row">
          <div class="pub-year">{{ p.year }}</div>
          <div class="pub-body">
            <div class="pub-title">{{ p.title }}</div>
            <div class="pub-venue">{{ p.venue }}</div>
            <div class="pub-authors">{{ p.authors }}</div>
          </div>
          <div class="pub-type">
            <span class="tag">{{ p.type === 'conf' ? pub.typeConf : pub.typeJour }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLangStore } from '../stores/lang.js'
import PageHeader from '../components/PageHeader.vue'

const lang = useLangStore()
const pub = computed(() => lang.t.publicacoes)

const filter = ref('all')
const yearFilter = ref('all')

const filters = computed(() => [
  { key: 'all',  label: pub.value.filterAll },
  { key: 'conf', label: pub.value.filterConf },
  { key: 'jour', label: pub.value.filterJour },
])

const years = computed(() =>
  [...new Set(pub.value.pubs.map(p => p.year))].sort((a, b) => b.localeCompare(a))
)

const filteredPubs = computed(() =>
  pub.value.pubs.filter(p =>
    (filter.value === 'all' || p.type === filter.value) &&
    (yearFilter.value === 'all' || p.year === yearFilter.value)
  )
)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--soft { background: var(--color-bg-soft); }

.filter-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 44px;
  flex-wrap: wrap;
}
.filter-bar__label {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
}
.filter-bar__btns { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-bar__label--year { margin-left: 4px; }

.filter-select {
  padding: 7px 32px 7px 14px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--color-border);
  background: white;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  appearance: auto;
}
.filter-select:hover { border-color: var(--color-primary); }

.filter-btn {
  padding: 7px 16px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--color-border);
  background: white;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s;
}
.filter-btn--active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}
.filter-btn:not(.filter-btn--active):hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.pub-list {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.pub-row {
  display: grid;
  grid-template-columns: 64px 1fr 110px;
  gap: 24px;
  align-items: start;
  padding: 26px 28px;
  border-bottom: 1px solid #EAF0FA;
  transition: background 0.18s;
}
.pub-row:hover { background: #FAFBFD; }
.pub-row:last-child { border-bottom: none; }

.pub-year { font-family: var(--font-serif); font-size: 0.92rem; font-weight: 700; color: var(--color-primary); padding-top: 2px; }
.pub-title { font-size: 0.93rem; font-weight: 600; color: var(--color-text); line-height: 1.55; margin-bottom: 6px; }
.pub-venue { font-size: 0.8rem; color: var(--color-text-subtle); margin-bottom: 3px; font-style: italic; }
.pub-authors { font-size: 0.76rem; color: var(--color-text-faint); }
.pub-type { padding-top: 2px; display: flex; justify-content: flex-end; }

@media (max-width: 600px) {
  .pub-row { grid-template-columns: 50px 1fr; }
  .pub-type { grid-column: 2; }
}
</style>
