<template>
  <PageHeader :title="n.pageTitle" :sub="n.pageSub" />

  <section class="section section--soft">
    <div class="container">
      <div class="news-grid">
        <div v-for="item in n.news" :key="item.title" class="news-card">
          <div class="news-card__accent" :style="{ background: item.accent }"></div>
          <div class="news-card__body">
            <div class="news-card__meta">
              <span class="news-card__date">{{ item.date }}</span>
              <span class="news-card__dot"></span>
              <span class="tag">{{ item.tag }}</span>
            </div>
            <h3 class="news-card__title">{{ item.title }}</h3>
            <p class="news-card__desc">{{ item.desc }}</p>
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
const n = computed(() => lang.t.noticias)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--soft { background: var(--color-bg-soft); }

.news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }

.news-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s, transform 0.25s;
}
.news-card:hover { box-shadow: var(--shadow-card-lg); transform: translateY(-3px); }
.news-card__accent { height: 5px; }
.news-card__body   { padding: 26px 22px; flex: 1; display: flex; flex-direction: column; }
.news-card__meta   { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.news-card__date   { font-size: 0.7rem; font-weight: 700; color: var(--color-text-faint); letter-spacing: 0.08em; text-transform: uppercase; }
.news-card__dot    { width: 3px; height: 3px; border-radius: 50%; background: #C8D5E8; flex: none; }
.news-card__title  { font-family: var(--font-serif); font-size: 1.02rem; font-weight: 700; color: var(--color-text); line-height: 1.42; margin-bottom: 12px; flex: 1; }
.news-card__desc   { font-size: 0.855rem; color: var(--color-text-muted); line-height: 1.72; }

@media (max-width: 900px) { .news-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .news-grid { grid-template-columns: 1fr; } }
</style>
