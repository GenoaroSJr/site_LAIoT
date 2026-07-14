<template>
  <section class="page-header">
    <div class="dot-grid-bg"></div>
    <div v-if="radial" class="page-header__radial"></div>
    <div class="container page-header__inner">
      <div class="page-header__breadcrumb">
        <RouterLink to="/" class="page-header__bc-home">LabTel</RouterLink>
        <span class="page-header__bc-sep">›</span>
        <span class="page-header__bc-current">{{ title }}</span>
      </div>
      <h1 class="page-header__title">{{ title }}</h1>
      <p v-if="sub" class="page-header__sub">{{ sub }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: { type: String, required: true },
  sub:   { type: String, default: '' },
  radial: { type: Boolean, default: false },
})
</script>

<style scoped>
.page-header {
  padding: 130px 0 72px;
  background: var(--color-primary);
  position: relative;
  overflow: hidden;
}
.page-header__radial {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 60%, rgba(26,110,219,0.18) 0%, transparent 55%);
  pointer-events: none;
}
.page-header__inner { position: relative; z-index: 1; }
.page-header__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
}
.page-header__bc-home {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
  transition: color 0.2s;
  text-decoration: none;
}
.page-header__bc-home:hover { color: rgba(255,255,255,0.75); }
.page-header__bc-sep { font-size: 0.75rem; color: rgba(255,255,255,0.25); }
.page-header__bc-current { font-size: 0.75rem; color: rgba(255,255,255,0.65); font-weight: 600; }
.page-header__title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 14px;
}
.page-header__sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.62);
  max-width: 520px;
  line-height: 1.75;
}
</style>
