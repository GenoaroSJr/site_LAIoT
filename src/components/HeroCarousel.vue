<template>
  <section class="carousel">
    <div class="dot-grid-bg"></div>

    <div class="carousel__track">
      <TransitionGroup name="slide" tag="div" class="carousel__slides">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          v-show="current === i"
          class="carousel__slide"
        >
          <div
            v-if="slide.img"
            class="carousel__bg"
            :style="{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: slide.bgFit || 'cover',
              backgroundPosition: 'center',
            }"
          ></div>
          <div class="carousel__scrim"></div>
          <div class="container carousel__content">
            <span class="badge-label carousel__label">{{ slide.label }}</span>
            <h2 class="carousel__title">{{ slide.title }}</h2>
            <p class="carousel__sub">{{ slide.sub }}</p>
            <div v-if="slide.ctaPrimary" class="carousel__ctas">
              <RouterLink :to="slide.ctaPrimary.to" class="btn-primary carousel__btn">
                {{ slide.ctaPrimary.label }}
              </RouterLink>
              <RouterLink v-if="slide.ctaSecondary" :to="slide.ctaSecondary.to" class="btn-outline carousel__btn">
                {{ slide.ctaSecondary.label }}
              </RouterLink>
            </div>
            <RouterLink v-else :to="slide.link" class="btn-outline carousel__btn">
              {{ slide.linkLabel }}
            </RouterLink>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <div class="carousel__controls">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="['carousel__dot', { 'carousel__dot--active': current === i }]"
        @click="goTo(i)"
        :aria-label="`Slide ${i + 1}`"
      ></button>
    </div>

    <button class="carousel__arrow carousel__arrow--prev" @click="prev" aria-label="Anterior">&#8592;</button>
    <button class="carousel__arrow carousel__arrow--next" @click="next" aria-label="Próximo">&#8594;</button>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLangStore } from '../stores/lang.js'

const lang = useLangStore()

const photoModules = import.meta.glob('../assets/imgs/carousel/*', { eager: true, import: 'default' })
const photosByName = {}
for (const path in photoModules) {
  photosByName[path.split('/').pop()] = photoModules[path]
}

const slides = computed(() =>
  lang.t.carousel.map(slide => ({
    ...slide,
    img: slide.img ? photosByName[slide.img.split('/').pop()] : null,
  }))
)

const current = ref(0)
let timer = null

function goTo(i) {
  current.value = i
  resetTimer()
}
function next() { current.value = (current.value + 1) % slides.value.length; resetTimer() }
function prev() { current.value = (current.value - 1 + slides.value.length) % slides.value.length; resetTimer() }

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(next, 5000)
}

onMounted(() => { timer = setInterval(next, 5000) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.carousel {
  position: relative;
  background: #002244;
  overflow: hidden;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel__track { position: relative; min-height: 472px; }
.carousel__slides { position: absolute; inset: 0; }

.carousel__slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 72px 0 56px;
}
.carousel__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;
}
.carousel__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, rgba(0,34,68,0.92) 0%, rgba(0,34,68,0.78) 45%, rgba(0,34,68,0.55) 100%);
}

.carousel__content {
  position: relative;
  z-index: 1;
  max-width: 680px;
}
.carousel__label { color: rgba(255,255,255,0.7); }
.carousel__title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 14px;
}
.carousel__sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.75;
  margin-bottom: 28px;
  max-width: 560px;
}
.carousel__btn { margin-top: 4px; }
.carousel__ctas { display: flex; gap: 14px; flex-wrap: wrap; }

.carousel__controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}
.carousel__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.35);
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  padding: 0;
}
.carousel__dot--active {
  background: white;
  transform: scale(1.25);
}

.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 40px; height: 40px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel__arrow:hover { background: rgba(255,255,255,0.22); }
.carousel__arrow--prev { left: 24px; }
.carousel__arrow--next { right: 24px; }

/* Vue TransitionGroup */
.slide-enter-active, .slide-leave-active { transition: opacity 0.5s ease, transform 0.5s ease; }
.slide-enter-from { opacity: 0; transform: translateX(30px); }
.slide-leave-to  { opacity: 0; transform: translateX(-30px); }
</style>
