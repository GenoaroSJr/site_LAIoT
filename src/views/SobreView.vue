<template>
  <PageHeader :title="s.pageTitle" :sub="s.pageSub" radial />

  <!-- Missão & Visão -->
  <section class="section section--white">
    <div class="container section-grid-2">
      <div>
        <span class="badge-label">{{ s.missionLabel }}</span>
        <h2 class="serif-h2">{{ s.missionTitle }}</h2>
        <p class="body-p">{{ s.missionP1 }}</p>
        <p class="body-p body-p--muted">{{ s.missionP2 }}</p>
      </div>
      <div class="flex-col gap-20">
        <div class="card-dark">
          <div class="card-dark__ring1"></div>
          <div class="card-dark__ring2"></div>
          <p class="card-dark__quote">{{ s.missionQuote }}</p>
        </div>
        <div class="vision-card">
          <div class="vision-card__label">{{ s.visionLabel }}</div>
          <p class="vision-card__text">{{ s.visionText }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- O Grupo -->
  <section class="section section--soft">
    <div class="container section-grid-2">
      <div>
        <span class="badge-label">{{ s.groupLabel }}</span>
        <h2 class="serif-h2">{{ s.groupTitle }}</h2>
        <p class="body-p body-p--muted">{{ s.groupP1 }}</p>
        <p class="body-p body-p--muted">{{ s.groupP2 }}</p>
      </div>
      <div class="stats-cards">
        <div v-for="st in s.stats" :key="st.label" class="stat-card" :style="{ borderTopColor: st.color }">
          <div class="stat-card__value">{{ st.value }}</div>
          <div class="stat-card__label">{{ st.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Infraestrutura -->
  <section class="section section--white">
    <div class="container">
      <SectionHeader :label="s.infraLabel" :title="s.infraTitle" :sub="s.infraSub" narrow />
      <div class="equip-table-wrap">
        <table class="equip-table">
          <thead>
            <tr>
              <th>{{ s.equipamentos.headers.equipamento }}</th>
              <th>{{ s.equipamentos.headers.quantidade }}</th>
              <th>{{ s.equipamentos.headers.empresa }}</th>
              <th>{{ s.equipamentos.headers.modelo }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in s.equipamentos.items" :key="i">
              <td>{{ item.equipamento }}</td>
              <td>{{ item.quantidade }}</td>
              <td>{{ item.empresa }}</td>
              <td>{{ item.modelo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Localização -->
  <section class="section section--blue-light">
    <div class="container section-grid-2">
      <div>
        <span class="badge-label">{{ s.locationLabel }}</span>
        <h2 class="serif-h2">{{ s.locationTitle }}</h2>
        <div class="contact-list">
          <div class="contact-list__item">
            <div class="contact-list__icon contact-list__icon--dark"></div>
            <div>
              <div class="contact-list__title">{{ s.locInst }}</div>
              <div class="contact-list__text">Av. BPS, 1303 – Pinheirinho</div>
              <div class="contact-list__text">Itajubá, MG – CEP 37500-903</div>
            </div>
          </div>
          <div class="contact-list__item">
            <div class="contact-list__icon contact-list__icon--mid"><span>TEL</span></div>
            <span class="contact-list__text">+55 (35) 3629-1101</span>
          </div>
          <div class="contact-list__item">
            <div class="contact-list__icon contact-list__icon--light"><span>mail</span></div>
            <a href="mailto:spadoti@unifei.edu.br" class="contact-list__link">spadoti@unifei.edu.br</a>
          </div>
        </div>
      </div>
      <div class="map-placeholder">
        <div>
          <div class="map-placeholder__label">{{ s.mapLabel }}</div>
          <div class="map-placeholder__sub">Av. BPS, 1303 · Itajubá, MG</div>
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
const s = computed(() => lang.t.sobre)
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }
.section--soft  { background: var(--color-bg-soft); }
.section--blue-light { background: var(--color-bg-blue); }

.serif-h2 {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.15;
  margin-bottom: 24px;
}
.body-p { font-size: 1rem; color: var(--color-text); line-height: 1.82; margin-bottom: 20px; }
.body-p--muted { color: var(--color-text-muted); font-size: 0.96rem; }
.flex-col { display: flex; flex-direction: column; }
.gap-20 { gap: 20px; }

.card-dark {
  background: var(--color-primary);
  border-radius: var(--radius);
  padding: 28px;
  position: relative;
  overflow: hidden;
}
.card-dark__ring1, .card-dark__ring2 {
  position: absolute;
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 50%;
}
.card-dark__ring1 { width: 100px; height: 100px; top: -20px; right: -20px; }
.card-dark__ring2 { width: 140px; height: 140px; top: -40px; right: -40px; }
.card-dark__quote {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-style: italic;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.vision-card {
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 24px;
}
.vision-card__label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
  margin-bottom: 12px;
}
.vision-card__text { font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.75; }

.stats-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stat-card {
  background: white;
  border: 1px solid var(--color-border);
  border-top: 3px solid;
  border-radius: var(--radius);
  padding: 22px 20px;
}
.stat-card__value {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 8px;
}
.stat-card__label { font-size: 0.78rem; color: var(--color-text-subtle); font-weight: 500; line-height: 1.4; }

.equip-table-wrap {
  margin-top: 32px;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: white;
}
.equip-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.equip-table th {
  text-align: left;
  padding: 14px 20px;
  background: var(--color-bg-soft);
  color: var(--color-text-subtle);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
}
.equip-table td {
  padding: 12px 20px;
  border-bottom: 1px solid #EAF0FA;
  color: var(--color-text);
}
.equip-table tbody tr:last-child td { border-bottom: none; }
.equip-table tbody tr:hover { background: #FAFBFD; }

.contact-list { display: flex; flex-direction: column; gap: 18px; }
.contact-list__item { display: flex; gap: 14px; align-items: flex-start; }
.contact-list__icon {
  flex: none;
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin-top: 2px;
}
.contact-list__icon--dark { background: var(--color-primary); }
.contact-list__icon--mid  { background: var(--color-primary-mid); }
.contact-list__icon--light{ background: var(--color-primary-light); }
.contact-list__icon span { font-size: 0.5rem; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: 0.04em; }
.contact-list__title { font-size: 0.82rem; font-weight: 700; color: var(--color-text); margin-bottom: 3px; }
.contact-list__text { font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.55; }
.contact-list__link { font-size: 0.9rem; color: var(--color-primary-mid); transition: color 0.2s; }
.contact-list__link:hover { color: var(--color-primary); }

.map-placeholder {
  height: 280px;
  background: #C8D8EE;
  border-radius: var(--radius);
  border: 1px solid #B0C4DC;
  display: flex; align-items: center; justify-content: center;
  text-align: center;
}
.map-placeholder__label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.map-placeholder__sub { font-size: 0.76rem; color: #7A8DAA; }
</style>
