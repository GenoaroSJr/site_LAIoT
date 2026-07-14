<template>
  <PageHeader :title="c.pageTitle" :sub="c.pageSub" />

  <!-- Main contact -->
  <section class="section section--blue-light">
    <div class="container contact-layout">
      <!-- Info -->
      <div>
        <span class="badge-label">{{ c.infoLabel }}</span>
        <h2 class="serif-h2">{{ c.infoTitle }}</h2>
        <div class="contact-list">
          <div class="contact-list__item">
            <div class="ci ci--dark"></div>
            <div>
              <div class="contact-list__title">{{ c.instName }}</div>
              <div class="contact-list__text">Av. BPS, 1303 – Pinheirinho</div>
              <div class="contact-list__text">Itajubá – MG, CEP 37500-903</div>
            </div>
          </div>
          <div class="contact-list__item">
            <div class="ci ci--mid"><span>TEL</span></div>
            <a href="tel:+553536291101" class="contact-list__text contact-list__link-dark">+55 (35) 3629-1101</a>
          </div>
          <div class="contact-list__item">
            <div class="ci ci--light"><span>mail</span></div>
            <a href="mailto:spadoti@unifei.edu.br" class="contact-list__link">spadoti@unifei.edu.br</a>
          </div>
        </div>
      </div>

      <a
        class="map-placeholder"
        href="https://www.google.com.br/maps/place/Av.+B+P+S,+1303+-+Pinheirinho,+Itajub%C3%A1+-+MG,+37500-903/@-22.4106592,-45.4543126,17z/data=!3m1!4b1!4m5!3m4!1s0x94cb7b528b809871:0xd76b828bf96e6ff9!8m2!3d-22.4106592!4d-45.4521239"
        target="_blank"
        rel="noopener"
      >
        <img :src="portariaImg" alt="Portaria do LabTel" class="map-placeholder__img" />
        <div class="map-placeholder__caption">Av. BPS, 1303 · Itajubá, MG</div>
      </a>
    </div>
  </section>

  <!-- Como chegar -->
  <section class="section section--white">
    <div class="container">
      <SectionHeader :label="c.howLabel" :title="c.howTitle" :sub="c.howSub" narrow />
      <div class="section-grid-2 how-grid">
        <div v-for="item in c.howItems" :key="item.title" class="how-card" :style="{ borderTopColor: item.color }">
          <div class="how-card__title">{{ item.title }}</div>
          <div class="how-card__desc">{{ item.desc }}</div>
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
import portariaImg from '../assets/imgs/SITE-INT-Portaria_Cleber-Gonçalves.jpg'

const lang = useLangStore()
const c = computed(() => lang.t.contato)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }
.section--blue-light { background: var(--color-bg-blue); }

.contact-layout { display: grid; grid-template-columns: 1fr 1.2fr; gap: 72px; align-items: center; max-width: 980px; margin: 0 auto; }

.serif-h2 { font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--color-text); line-height: 1.15; margin-bottom: 28px; }

.contact-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.contact-list__item { display: flex; gap: 14px; align-items: center; }
.ci {
  flex: none;
  width: 38px; height: 38px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.ci--dark  { background: var(--color-primary); }
.ci--mid   { background: var(--color-primary-mid); }
.ci--light { background: var(--color-primary-light); }
.ci span   { font-size: 0.5rem; font-weight: 900; color: white; text-transform: uppercase; }
.contact-list__title { font-size: 0.82rem; font-weight: 700; color: var(--color-text); margin-bottom: 3px; }
.contact-list__text  { font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.55; }
.contact-list__link-dark { font-size: 0.92rem; color: var(--color-text); text-decoration: none; transition: color 0.2s; }
.contact-list__link-dark:hover { color: var(--color-primary); }
.contact-list__link  { font-size: 0.92rem; color: var(--color-primary-mid); text-decoration: none; transition: color 0.2s; }
.contact-list__link:hover { color: var(--color-primary); }

.map-placeholder {
  position: relative;
  display: block;
  height: 260px;
  border-radius: var(--radius);
  border: 1px solid #B0C4DC;
  overflow: hidden;
  transition: opacity 0.2s;
}
.map-placeholder:hover { opacity: 0.92; }
.map-placeholder__img { width: 100%; height: 100%; object-fit: cover; display: block; }
.map-placeholder__caption {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 10px 16px;
  background: linear-gradient(0deg, rgba(0,20,45,0.75) 0%, rgba(0,20,45,0) 100%);
  color: white;
  font-size: 0.78rem;
  font-weight: 600;
  text-align: center;
}

.how-grid { gap: 20px; }

.how-card {
  padding: 26px 22px;
  border: 1px solid var(--color-border);
  border-top: 3px solid;
  border-radius: var(--radius);
}
.how-card__title { font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 10px; }
.how-card__desc  { font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; }

@media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr; } }
</style>
