<template>
  <section class="hero">
    <div class="dot-grid-bg"></div>

    <!-- Carrossel 1: conteúdo (texto sobre fundo sólido, sem foto atrás) -->
    <div
      class="container hero__text"
      @mouseenter="text.pause()"
      @mouseleave="text.resume()"
      @focusin="text.pause()"
      @focusout="text.resume()"
    >
      <div class="hero__slides">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          :class="['hero__slide', { 'hero__slide--active': text.current.value === i }]"
          :aria-hidden="text.current.value !== i"
        >
          <span class="badge-label hero__label">{{ slide.label }}</span>
          <h2 class="hero__title">{{ slide.title }}</h2>
          <p class="hero__sub">{{ slide.sub }}</p>
          <div v-if="slide.ctaPrimary" class="hero__ctas">
            <RouterLink :to="slide.ctaPrimary.to" class="btn-primary">{{ slide.ctaPrimary.label }}</RouterLink>
            <RouterLink v-if="slide.ctaSecondary" :to="slide.ctaSecondary.to" class="btn-outline">
              {{ slide.ctaSecondary.label }}
            </RouterLink>
          </div>
          <div v-else class="hero__ctas">
            <RouterLink :to="slide.link" class="btn-outline">{{ slide.linkLabel }}</RouterLink>
          </div>
        </div>
      </div>

      <div class="hero__controls">
        <button class="hero__arrow" @click="text.prev()" aria-label="Anterior">&#8592;</button>
        <div class="hero__dots">
          <button
            v-for="(_, i) in slides"
            :key="i"
            :class="['hero__dot', { 'hero__dot--active': text.current.value === i }]"
            @click="text.goTo(i)"
            :aria-label="`Slide ${i + 1}`"
          ></button>
        </div>
        <button class="hero__arrow" @click="text.next()" aria-label="Próximo">&#8594;</button>
        <span class="hero__counter">
          {{ pad(text.current.value + 1) }} <span>/ {{ pad(slides.length) }}</span>
        </span>
      </div>
    </div>

    <!-- Carrossel 2: fotos (cores reais, sem película) -->
    <div class="container">
      <div
        class="photos"
        @mouseenter="photo.pause()"
        @mouseleave="photo.resume()"
      >
        <img
          v-for="(src, i) in photos"
          :key="src"
          :src="src"
          :class="['photos__img', { 'photos__img--active': photo.current.value === i }]"
          :alt="`LabTel – foto ${i + 1}`"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :aria-hidden="photo.current.value !== i"
        />

        <button class="photos__arrow photos__arrow--prev" @click="photo.prev()" aria-label="Foto anterior">&#8592;</button>
        <button class="photos__arrow photos__arrow--next" @click="photo.next()" aria-label="Próxima foto">&#8594;</button>

        <div class="photos__dots">
          <button
            v-for="(_, i) in photos"
            :key="i"
            :class="['photos__dot', { 'photos__dot--active': photo.current.value === i }]"
            @click="photo.goTo(i)"
            :aria-label="`Foto ${i + 1}`"
          ></button>
        </div>

        <div class="photos__progress" aria-hidden="true">
          <span
            :key="photo.current.value"
            :class="['photos__progress-bar', { 'photos__progress-bar--paused': photo.paused.value }]"
            :style="{ animationDuration: `${PHOTO_INTERVAL}ms` }"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '../stores/lang.js'
import foto1 from '../assets/imgs/carousel/carrousel_1.jpg'
import foto3 from '../assets/imgs/carousel/carrousel_3.jpg'
import foto4 from '../assets/imgs/carousel/carrousel_4.jpg'
import foto2 from '../assets/imgs/carousel/carrousel_2.jpg'

const TEXT_INTERVAL = 7000
const PHOTO_INTERVAL = 4500

const lang = useLangStore()
const slides = computed(() => lang.t.carousel)

// Fotos do carrossel, na ordem de exibição.
const photos = [foto1, foto3, foto4, foto2]

function useAutoplay(length, interval) {
  const current = ref(0)
  const paused = ref(false)
  let timer = null

  const start = () => { clearInterval(timer); timer = setInterval(() => step(1), interval) }
  const stop = () => clearInterval(timer)
  function step(d) { current.value = (current.value + d + length()) % length() }

  return {
    current,
    paused,
    next() { step(1); if (!paused.value) start() },
    prev() { step(-1); if (!paused.value) start() },
    goTo(i) { current.value = i; if (!paused.value) start() },
    pause() { paused.value = true; stop() },
    resume() { paused.value = false; start() },
    start,
    stop,
  }
}

const text = useAutoplay(() => slides.value.length, TEXT_INTERVAL)
const photo = useAutoplay(() => photos.length, PHOTO_INTERVAL)

const pad = n => String(n).padStart(2, '0')

onMounted(() => { text.start(); photo.start() })
onBeforeUnmount(() => { text.stop(); photo.stop() })
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 132px 0 48px;
  /* termina na cor da faixa de estatísticas para emendar sem corte */
  background:
    radial-gradient(ellipse at 80% 10%, rgba(46, 134, 232, 0.22), transparent 55%),
    linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 55%, #1A2540 100%);
}

/* ── Carrossel de conteúdo ── */
.hero__text {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

/* Todos os slides ocupam a mesma célula: a altura é a do slide mais alto, sem saltos. */
.hero__slides { display: grid; max-width: 720px; }
.hero__slide {
  grid-area: 1 / 1;
  opacity: 0;
  visibility: hidden;
  transform: translateX(24px);
  transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s;
}
.hero__slide--active {
  opacity: 1;
  visibility: visible;
  transform: none;
}
.hero__label { color: var(--color-primary-light); }
.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(1.7rem, 3.2vw, 2.7rem);
  font-weight: 700;
  color: white;
  line-height: 1.12;
  margin-bottom: 14px;
}
.hero__sub {
  font-size: 1.02rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
  margin-bottom: 26px;
  max-width: 580px;
}
.hero__ctas { display: flex; gap: 14px; flex-wrap: wrap; }

.hero__controls {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: none;
}
.hero__arrow,
.photos__arrow {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.hero__arrow {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
}
.hero__arrow:hover { background: rgba(255, 255, 255, 0.18); border-color: rgba(255, 255, 255, 0.45); }
.hero__dots { display: flex; gap: 8px; }
.hero__dot {
  width: 22px;
  height: 4px;
  padding: 0;
  border: none;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
  transition: background 0.2s, width 0.3s;
}
.hero__dot--active { width: 40px; background: white; }
.hero__counter {
  margin-left: 6px;
  font-family: var(--font-serif);
  font-size: 0.9rem;
  color: white;
}
.hero__counter span { color: rgba(255, 255, 255, 0.45); }

/* ── Carrossel de fotos ── */
.photos {
  position: relative;
  z-index: 1;
  margin-top: 44px;
  aspect-ratio: 2.6 / 1;
  overflow: hidden;
  border-radius: 10px;
  background: var(--color-primary-dark);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.photos__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0;
  transform: scale(1.06);
  transition: opacity 0.9s ease, transform 6s ease-out;
}
.photos__img--active {
  opacity: 1;
  transform: scale(1);
}

.photos__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(0, 34, 68, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  opacity: 0;
}
.photos:hover .photos__arrow,
.photos__arrow:focus-visible { opacity: 1; }
.photos__arrow:hover { background: rgba(0, 34, 68, 0.7); }
.photos__arrow--prev { left: 16px; }
.photos__arrow--next { right: 16px; }

.photos__dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 34, 68, 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.photos__dot {
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.photos__dot--active { background: white; transform: scale(1.3); }

.photos__progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  height: 3px;
  background: rgba(255, 255, 255, 0.15);
}
.photos__progress-bar {
  display: block;
  height: 100%;
  background: var(--color-primary-light);
  transform-origin: left;
  animation: photos-progress linear forwards;
}
.photos__progress-bar--paused { animation-play-state: paused; }
@keyframes photos-progress {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

@media (max-width: 900px) {
  .hero { padding-top: 112px; }
  .hero__text { flex-direction: column; align-items: stretch; gap: 28px; }
  .photos { aspect-ratio: 16 / 9; margin-top: 32px; }
  .photos__arrow { opacity: 1; width: 34px; height: 34px; }
}
@media (max-width: 560px) {
  .hero__controls { gap: 10px; }
  .hero__dot { width: 14px; }
  .hero__dot--active { width: 28px; }
  .photos { aspect-ratio: 4 / 3; border-radius: 8px; }
  .photos__arrow { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__slide,
  .photos__img { transition: opacity 0.3s ease; transform: none; }
  .photos__progress { display: none; }
}
</style>
