<template>
  <section class="osa-header">
    <div class="dot-grid-bg"></div>
    <div class="osa-header__radial"></div>
    <div class="container osa-header__inner">
      <div>
        <div class="osa-header__breadcrumb">
          <RouterLink to="/" class="osa-header__bc-home">LabTel</RouterLink>
          <span class="osa-header__bc-sep">›</span>
          <span class="osa-header__bc-cur">{{ o.pageTitle }}</span>
        </div>
        <h1 class="osa-header__title">{{ o.pageTitle }}</h1>
        <p class="osa-header__sub">{{ o.pageSub }}</p>
      </div>
      <div class="osa-badge" aria-hidden="true">
        <div class="osa-badge__ring1"></div>
        <div class="osa-badge__ring2"></div>
        <div class="osa-badge__inner">
          <div class="osa-badge__text">OPTICA</div>
          <div class="osa-badge__sub">Chapter</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sobre o capítulo -->
  <section class="section section--white">
    <div class="container section-grid-2">
      <div>
        <span class="badge-label">{{ o.aboutLabel }}</span>
        <h2 class="serif-h2">{{ o.aboutTitle }}</h2>
        <p class="body-p">{{ o.aboutP1 }}</p>
        <p class="body-p body-p--muted">{{ o.aboutP2 }}</p>
        <a href="https://www.optica.org/home/" target="_blank" class="btn-dark">
          {{ o.osaLink }}
        </a>
      </div>
      <div>
        <div class="activities-label">{{ o.activitiesLabel }}</div>
        <div class="activities-list">
          <div v-for="act in o.activities" :key="act.title" class="act-item">
            <div class="act-icon"><div class="act-dot"></div></div>
            <div>
              <div class="act-title">{{ act.title }}</div>
              <div class="act-desc">{{ act.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Como participar -->
  <section class="section section--soft">
    <div class="container join-layout">
      <span class="badge-label">{{ o.joinLabel }}</span>
      <h2 class="serif-h2">{{ o.joinTitle }}</h2>
      <p class="body-sub">{{ o.joinText }}</p>
      <div class="join-contact">
        <div class="join-contact__label">{{ o.joinContact }}</div>
        <a href="mailto:spadoti@unifei.edu.br" class="join-contact__email">spadoti@unifei.edu.br</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '../stores/lang.js'

const lang = useLangStore()
const o = computed(() => lang.t.osa)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }
.section--soft  { background: var(--color-bg-soft); }

.osa-header {
  padding: 130px 0 72px;
  background: #002952;
  position: relative;
  overflow: hidden;
}
.osa-header__radial {
  position: absolute;
  right: 0; top: 0; bottom: 0;
  width: 40%;
  background: radial-gradient(ellipse at right center, rgba(26,110,219,0.2) 0%, transparent 65%);
  pointer-events: none;
}
.osa-header__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}
.osa-header__breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 18px; }
.osa-header__bc-home { font-size: 0.75rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
.osa-header__bc-home:hover { color: rgba(255,255,255,0.75); }
.osa-header__bc-sep { font-size: 0.75rem; color: rgba(255,255,255,0.2); }
.osa-header__bc-cur { font-size: 0.75rem; color: rgba(255,255,255,0.6); font-weight: 600; }
.osa-header__title { font-family: var(--font-serif); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; color: white; line-height: 1.1; margin-bottom: 14px; }
.osa-header__sub { font-size: 1rem; color: rgba(255,255,255,0.6); max-width: 520px; line-height: 1.75; }

.osa-badge {
  flex: none;
  width: 180px; height: 180px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.osa-badge__ring1 {
  position: absolute; inset: 0;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%;
}
.osa-badge__ring2 {
  position: absolute; inset: 20px;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 50%;
}
.osa-badge__inner {
  position: absolute; inset: 40px;
  border: 2px solid rgba(46,134,232,0.5);
  border-radius: 50%;
  background: rgba(46,134,232,0.06);
  display: flex; align-items: center; justify-content: center;
  text-align: center;
}
.osa-badge__text { font-family: var(--font-serif); font-size: 1.05rem; font-weight: 700; color: white; line-height: 1; letter-spacing: 0.02em; }
.osa-badge__sub  { font-size: 0.55rem; color: rgba(255,255,255,0.45); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px; }

.serif-h2 { font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--color-text); line-height: 1.15; margin-bottom: 22px; }
.body-p { font-size: 0.97rem; color: var(--color-text); line-height: 1.82; margin-bottom: 16px; }
.body-p--muted { color: var(--color-text-muted); font-size: 0.93rem; margin-bottom: 28px; }
.body-sub { font-size: 0.96rem; color: var(--color-text-muted); line-height: 1.78; margin-bottom: 24px; }

.activities-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-subtle); margin-bottom: 20px; }
.activities-list { display: flex; flex-direction: column; gap: 14px; }
.act-item {
  display: flex; gap: 14px; align-items: flex-start;
  padding: 16px 18px;
  background: var(--color-bg-soft);
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
}
.act-icon {
  flex: none;
  width: 32px; height: 32px;
  background: var(--color-bg-blue);
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  margin-top: 1px;
}
.act-dot { width: 10px; height: 10px; background: var(--color-primary); border-radius: 50%; }
.act-title { font-size: 0.88rem; font-weight: 700; color: var(--color-text); margin-bottom: 3px; }
.act-desc  { font-size: 0.8rem; color: var(--color-text-subtle); line-height: 1.55; }

.join-layout { max-width: 560px; margin: 0 auto; text-align: center; }
.join-layout .body-sub { max-width: 460px; margin-left: auto; margin-right: auto; }
.join-layout .join-contact { text-align: left; }

.join-contact {
  background: var(--color-primary);
  border-radius: var(--radius);
  padding: 22px;
}
.join-contact__label { font-size: 0.78rem; font-weight: 700; color: rgba(255,255,255,0.55); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; }
.join-contact__email { font-size: 0.92rem; color: rgba(255,255,255,0.9); font-weight: 600; transition: color 0.2s; }
.join-contact__email:hover { color: white; }

@media (max-width: 900px) {
  .osa-header__inner { grid-template-columns: 1fr; }
  .osa-badge { display: none; }
}
</style>
