<template>
  <PageHeader :title="p.pageTitle" :sub="p.pageSub">
    <div class="res-quicklinks">
      <a v-for="line in p.lines" :key="line.id" :href="`#${line.id}`" class="res-quicklink">{{ line.navLabel }}</a>
    </div>
  </PageHeader>

  <template v-for="(line, i) in p.lines" :key="line.id">
    <section :id="line.id" :class="['section', i % 2 === 0 ? 'section--white' : 'section--soft']">
      <div
        class="container"
        :class="['res-layout', { 'res-layout--rev': i % 2 === 1, 'res-layout--solo': !line.subs.length }]"
      >
        <div v-if="i % 2 === 1 && line.subs.length" class="topics-grid">
          <div v-for="topic in line.subs" :key="topic.titulo" class="topic-card topic-card--white">
            <div class="topic-title">{{ topic.titulo }}</div>
            <div class="topic-desc">{{ topic.texto }}</div>
          </div>
        </div>

        <div>
          <div class="res-num-row">
            <span :class="['res-num', { 'res-num--light': i % 2 === 1 }]">{{ line.num }}</span>
            <span class="badge-label">{{ p.areaLabel }}</span>
          </div>
          <h2 class="serif-h2">{{ line.title }}</h2>
          <p class="body-p">{{ line.texto }}</p>
        </div>

        <div v-if="i % 2 === 0 && line.subs.length" class="topics-grid">
          <div v-for="topic in line.subs" :key="topic.titulo" class="topic-card">
            <div class="topic-title">{{ topic.titulo }}</div>
            <div class="topic-desc">{{ topic.texto }}</div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="i < p.lines.length - 1" class="section-divider"></div>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useLangStore } from '../stores/lang.js'
import PageHeader from '../components/PageHeader.vue'

const lang = useLangStore()
const p = computed(() => lang.t.pesquisa)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }
.section--soft  { background: var(--color-bg-soft); }

.res-quicklinks { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
.res-quicklink {
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
}
.res-quicklink:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); }

.res-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 72px;
  align-items: start;
}
.res-layout--rev { grid-template-columns: 1.2fr 1fr; }
.res-layout--solo { grid-template-columns: 1fr; max-width: 760px; }

.res-num-row { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.res-num {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 700;
  color: #EDF1F9;
  line-height: 1;
}
.res-num--light { color: #D8E4F2; }

.serif-h2 {
  font-family: var(--font-serif);
  font-size: 2.1rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.15;
  margin-bottom: 22px;
}
.body-p { font-size: 0.97rem; color: var(--color-text); line-height: 1.82; margin-bottom: 16px; }

.topics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  align-content: start;
}
.topic-card {
  padding: 20px 18px;
  background: var(--color-bg-soft);
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
}
.topic-card--white { background: white; }
.topic-title { font-size: 0.88rem; font-weight: 700; color: var(--color-primary); margin-bottom: 6px; }
.topic-desc  { font-size: 0.8rem; color: var(--color-text-subtle); line-height: 1.6; }

@media (max-width: 900px) {
  .res-layout, .res-layout--rev { grid-template-columns: 1fr; }
  .topics-grid { grid-template-columns: 1fr; }
}
</style>
