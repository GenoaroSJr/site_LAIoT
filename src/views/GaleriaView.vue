<template>
  <PageHeader :title="g.pageTitle" :sub="g.pageSub" />

  <section class="section section--white">
    <div class="container">
      <div class="gallery-grid">
        <button
          v-for="(photo, i) in photos"
          :key="photo"
          type="button"
          class="gallery-item"
          @click="openAt(i)"
        >
          <img :src="photo" alt="" loading="lazy" />
        </button>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div v-if="activeIndex !== null" class="lightbox" @click.self="close">
    <button class="lightbox__close" @click="close" aria-label="Fechar">&times;</button>
    <button class="lightbox__arrow lightbox__arrow--prev" @click="prev" aria-label="Anterior">&#8592;</button>
    <img :src="photos[activeIndex]" alt="" class="lightbox__img" />
    <button class="lightbox__arrow lightbox__arrow--next" @click="next" aria-label="Próximo">&#8594;</button>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useLangStore } from '../stores/lang.js'
import PageHeader from '../components/PageHeader.vue'

const lang = useLangStore()
const g = computed(() => lang.t.galeria)

const photoModules = import.meta.glob('../assets/imgs/galeria/*', { eager: true, import: 'default' })
const photos = Object.keys(photoModules).sort().map(k => photoModules[k])

const activeIndex = ref(null)
function openAt(i) { activeIndex.value = i }
function close() { activeIndex.value = null }
function next() { activeIndex.value = (activeIndex.value + 1) % photos.length }
function prev() { activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length }

function onKeydown(e) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.section { padding: 88px 0; }
.section--white { background: white; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.gallery-item {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  padding: 0;
  background: var(--color-bg-soft);
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}
.gallery-item:hover img { transform: scale(1.06); }

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 17, 34, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.lightbox__img {
  max-width: 100%;
  max-height: 100%;
  border-radius: var(--radius);
  box-shadow: 0 10px 60px rgba(0,0,0,0.5);
}
.lightbox__close {
  position: absolute;
  top: 24px; right: 28px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
}
.lightbox__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 44px; height: 44px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox__arrow:hover { background: rgba(255,255,255,0.22); }
.lightbox__arrow--prev { left: 24px; }
.lightbox__arrow--next { right: 24px; }

@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 600px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
