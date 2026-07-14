<template>
  <PageHeader :title="t.pageTitle" :sub="t.pageSub" />

  <section class="section section--white">
    <div class="container">
      <div v-for="group in thesisGroups" :key="group.label" class="thesis-group">
        <div class="thesis-group__label">{{ group.label }}</div>
        <div class="pub-list">
          <div v-for="(item, i) in group.rows" :key="i + item.title" class="thesis-row">
            <div class="thesis-body">
              <div class="pub-title">{{ item.title }}</div>
              <div class="pub-venue">{{ item.author }}</div>
              <div class="pub-authors">
                {{ [item.type, item.year, item.institution, item.advisor].filter(Boolean).join(' · ') }}
              </div>
            </div>
            <div class="pub-type">
              <span class="tag">{{ item.kind }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLangStore } from '../stores/lang.js'
import PageHeader from '../components/PageHeader.vue'

const lang = useLangStore()
const t = computed(() => lang.t.teses)

function tagRows(bucket) {
  const theses = (bucket.theses || []).map(x => ({ ...x, kind: t.value.thesisTypeLabel }))
  const dissertations = (bucket.dissertations || []).map(x => ({ ...x, kind: t.value.dissertationTypeLabel }))
  return [...theses, ...dissertations]
}

const thesisGroups = computed(() => [
  { label: t.value.ongoingLabel, rows: tagRows(t.value.theses.ongoing) },
  { label: t.value.completedLabel, rows: tagRows(t.value.theses.completed) },
])
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }

.thesis-group { margin-bottom: 36px; }
.thesis-group:last-child { margin-bottom: 0; }
.thesis-group__label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
}

.pub-list {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.thesis-row {
  display: grid;
  grid-template-columns: 1fr 110px;
  gap: 24px;
  align-items: start;
  padding: 22px 28px;
  border-bottom: 1px solid #EAF0FA;
  transition: background 0.18s;
}
.thesis-row:hover { background: #FAFBFD; }
.thesis-row:last-child { border-bottom: none; }
.thesis-body { min-width: 0; }

.pub-title { font-size: 0.93rem; font-weight: 600; color: var(--color-text); line-height: 1.55; margin-bottom: 6px; }
.pub-venue { font-size: 0.8rem; color: var(--color-text-subtle); margin-bottom: 3px; font-style: italic; }
.pub-authors { font-size: 0.76rem; color: var(--color-text-faint); }
.pub-type { padding-top: 2px; display: flex; justify-content: flex-end; }

@media (max-width: 600px) {
  .thesis-row { grid-template-columns: 1fr; }
  .pub-type { justify-content: flex-start; }
}
</style>
