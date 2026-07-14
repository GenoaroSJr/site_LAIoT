<template>
  <!-- Carousel first -->
  <HeroCarousel />

  <!-- Stats bar -->
  <section class="stats-bar">
    <div class="container stats-bar__inner">
      <span class="stats-bar__label">{{ h.statsLabel }}</span>
      <div class="stats-bar__grid">
        <div v-for="s in h.stats" :key="s.label" class="stats-bar__item">
          <div class="stats-bar__value">{{ s.value }}</div>
          <div class="stats-bar__desc">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Research areas -->
  <section class="section section--white">
    <div class="container">
      <SectionHeader :label="''" :title="h.resTitle" :sub="h.resSub" narrow />
      <div class="res-grid">
        <RouterLink
          v-for="area in h.resAreas"
          :key="area.num"
          :to="`/pesquisa#${area.id}`"
          class="res-card"
        >
          <div class="res-card__num">{{ area.num }}</div>
          <span class="badge-label res-card__label">{{ area.label }}</span>
          <h3 class="res-card__title">{{ area.title }}</h3>
          <p class="res-card__desc">{{ area.desc }}</p>
          <div class="res-card__tags">
            <span v-for="tag in area.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Latest News -->
  <section class="section section--soft">
    <div class="container">
      <SectionHeader :title="h.news" :sub="h.newsSub" narrow />
      <div class="section-grid-3">
        <div v-for="item in h.latestNews" :key="item.title" class="news-card">
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
      <div style="margin-top: 32px; text-align: center;">
        <RouterLink to="/noticias" class="btn-dark">{{ t.nav.news }} →</RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="dot-grid-bg"></div>
    <div class="container cta-section__inner">
      <div>
        <h2 class="cta-section__title">{{ h.ctaTitle }}</h2>
        <p class="cta-section__sub">{{ h.ctaSub }}</p>
      </div>
      <div class="cta-section__btns">
        <RouterLink to="/contato" class="btn-primary">{{ h.ctaBtn }}</RouterLink>
        <RouterLink to="/equipe" class="btn-outline">{{ h.ctaBtnSecondary }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '../stores/lang.js'
import HeroCarousel from '../components/HeroCarousel.vue'
import SectionHeader from '../components/SectionHeader.vue'

const lang = useLangStore()
const t = computed(() => lang.t)
const h = computed(() => lang.t.home)
</script>

<style scoped>
/* Stats */
.stats-bar { background: #1A2540; padding: 32px 0; }
.stats-bar__inner { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
.stats-bar__label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  white-space: nowrap;
}
.stats-bar__grid { display: flex; gap: 40px; flex-wrap: wrap; }
.stats-bar__value {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}
.stats-bar__desc { font-size: 0.76rem; color: rgba(255,255,255,0.45); margin-top: 4px; }

/* Research grid */
.res-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.res-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  transition: box-shadow 0.22s, transform 0.22s;
}
.res-card:hover { box-shadow: var(--shadow-card); transform: translateY(-2px); }
.res-card__num {
  font-family: var(--font-serif);
  font-size: 2.8rem;
  font-weight: 700;
  color: #EDF1F9;
  line-height: 1;
}
.res-card__label { margin-bottom: 0; }
.res-card__title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.25;
}
.res-card__desc { font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.7; flex: 1; }
.res-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }

/* News */
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
.news-card__body { padding: 22px; flex: 1; }
.news-card__meta { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
.news-card__date { font-size: 0.7rem; font-weight: 700; color: var(--color-text-faint); letter-spacing: 0.08em; text-transform: uppercase; }
.news-card__dot { width: 3px; height: 3px; border-radius: 50%; background: #C8D5E8; flex: none; }
.news-card__title {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.42;
  margin-bottom: 10px;
}
.news-card__desc { font-size: 0.855rem; color: var(--color-text-muted); line-height: 1.72; }

/* CTA */
.cta-section {
  background: var(--color-primary);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}
.cta-section__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.cta-section__title {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1.15;
  margin-bottom: 10px;
}
.cta-section__sub { font-size: 0.96rem; color: rgba(255,255,255,0.62); line-height: 1.75; max-width: 480px; }
.cta-section__btns { display: flex; gap: 14px; flex-wrap: wrap; }

.section { padding: 88px 0; }
.section--white { background: white; }
.section--soft { background: var(--color-bg-soft); }

@media (max-width: 900px) {
  .res-grid { grid-template-columns: 1fr; }
  .cta-section__inner { flex-direction: column; align-items: flex-start; }
}
</style>
