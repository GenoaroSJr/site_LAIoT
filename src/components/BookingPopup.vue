<template>
  <Teleport to="body">
    <Transition name="event-fade">
      <div v-if="open" class="event-overlay" @click.self="close">
        <div class="event-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
          <button class="event-modal__close" :aria-label="bk.close" @click="close">&times;</button>

          <header class="event-modal__head">
            <div class="event-modal__logos">
              <img :src="labtelLogo" alt="LabTel" class="event-modal__logo event-modal__logo--labtel" />
              <span class="event-modal__divider"></span>
              <img :src="unifeiLogo" alt="UNIFEI" class="event-modal__logo event-modal__logo--unifei" />
            </div>
            <span class="event-modal__tag">{{ bk.tag }}</span>
            <h2 id="booking-modal-title" class="event-modal__title">{{ bk.title }}</h2>
            <p class="event-modal__intro">{{ bk.intro }}</p>
          </header>

          <div class="event-modal__body">
            <ul class="event-modal__info">
              <li>
                <span class="event-modal__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
                </span>
                <div>
                  <span class="event-modal__label">{{ bk.step1Label }}</span>
                  <strong>{{ bk.step1 }}</strong>
                </div>
              </li>
              <li>
                <span class="event-modal__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </span>
                <div>
                  <span class="event-modal__label">{{ bk.step2Label }}</span>
                  <strong>{{ bk.step2 }}</strong>
                </div>
              </li>
              <li>
                <span class="event-modal__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </span>
                <div>
                  <span class="event-modal__label">{{ bk.step3Label }}</span>
                  <strong>{{ bk.step3 }}</strong>
                </div>
              </li>
            </ul>
            <a
              class="btn-dark event-modal__cta"
              :href="BOOKING_URL"
              target="_blank"
              rel="noopener noreferrer"
              @click="close"
            >{{ bk.cta }}</a>
            <button class="event-modal__later" @click="close">{{ bk.later }}</button>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="event-badge">
      <a
        v-if="!open"
        class="event-badge"
        :href="BOOKING_URL"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="bk.badgeAria"
      >
        <img :src="labtelLogo" alt="" class="event-badge__logo" />
        <span class="event-badge__text">{{ bk.badge }}</span>
        <span class="event-badge__pulse" aria-hidden="true"></span>
      </a>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useLangStore } from '../stores/lang.js'
import { useUiStore } from '../stores/ui.js'
import labtelLogo from '../assets/imgs/Logo1.png'
import unifeiLogo from '../assets/imgs/EFEI_logo.png'

// Agenda pública (Google Calendar – página de agendamento) para reservar o laboratório.
const BOOKING_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2o8MUX3CATmCaS-chO-s5lDk35_YEaA3FBl6SQtqtaQIOQtcQTKnZ8h4rUtMSmX9wdt7h64Tnr'

const lang = useLangStore()
const bk = computed(() => lang.t.booking)

const ui = useUiStore()
const open = computed(() => ui.bookingOpen)
const close = ui.closeBooking

function onKey(e) {
  if (e.key === 'Escape' && open.value) close()
}

// Trava a rolagem da página enquanto o modal está aberto.
watch(open, v => { document.body.style.overflow = v ? 'hidden' : '' }, { immediate: true })

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ── Overlay / modal ── */
.event-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 34, 68, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.event-modal {
  position: relative;
  width: 100%;
  max-width: 520px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  scrollbar-width: none; /* rola em telas baixas, sem barra visível */
  background: var(--color-bg);
  border-radius: 10px;
  box-shadow: 0 24px 64px rgba(0, 34, 68, 0.35);
}
.event-modal::-webkit-scrollbar { display: none; }
.event-modal__close {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition: background var(--transition);
}
.event-modal__close:hover { background: rgba(255, 255, 255, 0.25); }

.event-modal__head {
  padding: 32px 32px 26px;
  text-align: center;
  color: white;
  background:
    radial-gradient(circle at 85% 0%, rgba(46, 134, 232, 0.45), transparent 55%),
    linear-gradient(135deg, var(--color-primary-dark), var(--color-primary) 55%, var(--color-primary-mid));
  border-radius: 10px 10px 0 0;
}
.event-modal__logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 20px;
}
.event-modal__logo {
  height: 64px;
  width: auto;
  object-fit: contain;
}
.event-modal__logo--labtel {
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  height: 64px;
}
.event-modal__logo--unifei {
  width: 64px;
  border-radius: var(--radius-full);
}
.event-modal__divider {
  width: 1px;
  height: 44px;
  background: rgba(255, 255, 255, 0.35);
}
.event-modal__tag {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: white;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
}
.event-modal__title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 1.6rem;
  line-height: 1.25;
  color: white;
}
.event-modal__intro {
  margin: 10px auto 0;
  max-width: 400px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

.event-modal__body { padding: 26px 32px 30px; }
.event-modal__info {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.event-modal__info li {
  display: flex;
  align-items: center;
  gap: 14px;
}
.event-modal__icon {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: var(--color-bg-blue);
}
.event-modal__icon svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: var(--color-primary-mid);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.event-modal__label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
}
.event-modal__info strong {
  font-size: 1rem;
  color: var(--color-text);
}
.event-modal__cta {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
}
.event-modal__later {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border: none;
  background: none;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-subtle);
  cursor: pointer;
}
.event-modal__later:hover { color: var(--color-text); text-decoration: underline; }

/* ── Floating badge ── */
.event-badge {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1500;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px 8px 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-mid));
  color: white;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(0, 51, 102, 0.35);
  transition: transform var(--transition), box-shadow var(--transition);
}
.event-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(0, 51, 102, 0.45);
}
.event-badge__logo {
  width: 40px;
  height: 40px;
  padding: 6px;
  object-fit: contain;
  background: white;
  border-radius: var(--radius-full);
}
.event-badge__pulse {
  position: absolute;
  top: 4px;
  left: 36px;
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--color-primary-light);
  box-shadow: 0 0 0 2px white;
  animation: event-pulse 1.8s ease-out infinite;
}
@keyframes event-pulse {
  0%   { box-shadow: 0 0 0 2px white, 0 0 0 2px rgba(46, 134, 232, 0.7); }
  100% { box-shadow: 0 0 0 2px white, 0 0 0 12px rgba(46, 134, 232, 0); }
}

/* ── Transitions ── */
.event-fade-enter-active,
.event-fade-leave-active { transition: opacity var(--transition-mid); }
.event-fade-enter-active .event-modal,
.event-fade-leave-active .event-modal { transition: transform var(--transition-mid); }
.event-fade-enter-from,
.event-fade-leave-to { opacity: 0; }
.event-fade-enter-from .event-modal,
.event-fade-leave-to .event-modal { transform: translateY(16px) scale(0.97); }

.event-badge-enter-active,
.event-badge-leave-active { transition: opacity var(--transition-mid), transform var(--transition-mid); }
.event-badge-enter-from,
.event-badge-leave-to { opacity: 0; transform: translateY(16px); }

@media (max-width: 560px) {
  .event-modal__head { padding: 28px 20px 22px; }
  .event-modal__body { padding: 22px 20px 24px; }
  .event-modal__logo,
  .event-modal__logo--labtel { height: 52px; }
  .event-modal__logo--unifei { width: 52px; }
  .event-badge { right: 16px; bottom: 16px; }
}
/* Telas baixas: compacta o modal para caber sem rolar */
@media (max-height: 640px) {
  .event-modal__head { padding: 20px 24px 16px; }
  .event-modal__logos { margin-bottom: 12px; }
  .event-modal__logo,
  .event-modal__logo--labtel { height: 48px; }
  .event-modal__logo--unifei { width: 48px; }
  .event-modal__tag { margin-bottom: 6px; }
  .event-modal__title { font-size: 1.35rem; }
  .event-modal__body { padding: 18px 24px 20px; }
  .event-modal__info { gap: 10px; margin-bottom: 18px; }
  .event-modal__icon { width: 36px; height: 36px; }
  }
@media (max-width: 380px) {
  .event-badge { padding-right: 8px; }
  .event-badge__text { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .event-badge__pulse { animation: none; }
}
</style>
