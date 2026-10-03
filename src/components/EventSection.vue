<template>
  <section class="event-section">
    <div class="container">
      <div class="event-card">
        <div class="event-card__date" aria-hidden="true">
          <span class="event-card__day">{{ ev.day }}</span>
          <span class="event-card__month">{{ ev.month }}</span>
          <span class="event-card__year">{{ ev.year }}</span>
        </div>

        <div class="event-card__main">
          <span class="badge-label event-card__label">{{ ev.sectionLabel }}</span>
          <h2 class="event-card__title">
            <span class="event-card__edition">{{ ev.edition }}</span> {{ ev.title }}
          </h2>
          <ul class="event-card__info">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
              <span><span class="sr-only">{{ ev.dateLabel }}: </span>{{ ev.date }}</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
              <span><span class="sr-only">{{ ev.placeLabel }}: </span>{{ ev.place }}</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" /></svg>
              <span><span class="sr-only">{{ ev.venueLabel }}: </span>{{ ev.venue }}</span>
            </li>
          </ul>
        </div>

        <div class="event-card__side">
          <div class="event-card__logos">
            <img :src="labtelLogo" alt="LabTel" class="event-card__logo event-card__logo--labtel" />
            <img :src="unifeiLogo" alt="UNIFEI" class="event-card__logo event-card__logo--unifei" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLangStore } from '../stores/lang.js'
import labtelLogo from '../assets/imgs/Logo1.png'
import unifeiLogo from '../assets/imgs/EFEI_logo.png'

const lang = useLangStore()
const ev = computed(() => lang.t.event)
</script>

<style scoped>
.event-section {
  background: var(--color-bg-soft);
  padding: 64px 0;
}
.event-card {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: var(--shadow-card);
}

.event-card__date {
  flex: none;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 16px;
  color: white;
  text-align: center;
  background:
    radial-gradient(circle at 80% 0%, rgba(46, 134, 232, 0.5), transparent 60%),
    linear-gradient(160deg, var(--color-primary-dark), var(--color-primary) 60%, var(--color-primary-mid));
}
.event-card__day {
  font-family: var(--font-serif);
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
}
.event-card__month {
  margin-top: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8FD3F7; /* azul-claro do símbolo LabTel */
}
.event-card__year {
  margin-top: 2px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.event-card__main {
  flex: 1;
  min-width: 0;
  padding: 30px 32px;
}
.event-card__label { margin-bottom: 8px; }
.event-card__title {
  font-family: var(--font-serif);
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text);
  margin-bottom: 18px;
}
.event-card__edition { color: var(--color-primary-mid); }
.event-card__info {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
}
.event-card__info li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-text-muted);
}
.event-card__info svg {
  flex: none;
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--color-primary-mid);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.event-card__side {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 28px 32px;
  border-left: 1px solid var(--color-border-light);
}
.event-card__logos {
  display: flex;
  align-items: center;
  gap: 16px;
}
.event-card__logo { height: 52px; width: auto; object-fit: contain; }
.event-card__logo--unifei { width: 52px; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .event-card { flex-wrap: wrap; }
  .event-card__side {
    width: 100%;
    border-left: none;
    border-top: 1px solid var(--color-border-light);
    padding: 20px 32px;
  }
}
@media (max-width: 560px) {
  .event-section { padding: 48px 0; }
  .event-card { flex-direction: column; }
  .event-card__date {
    width: 100%;
    flex-direction: row;
    gap: 10px;
    padding: 18px 20px;
  }
  .event-card__day { font-size: 1.7rem; }
  .event-card__month,
  .event-card__year { margin-top: 0; }
  .event-card__main { padding: 22px 20px; }
  .event-card__title { font-size: 1.4rem; }
  .event-card__info { flex-direction: column; }
  .event-card__side { padding: 20px; }
}
</style>
