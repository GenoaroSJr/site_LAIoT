<template>
  <div :class="['section-hdr', { 'section-hdr--narrow': narrow }]">
    <span v-if="label" class="badge-label">{{ label }}</span>
    <h2 class="section-hdr__title">{{ title }}</h2>
    <p v-if="sub" class="section-hdr__sub">{{ sub }}</p>
  </div>
</template>

<script setup>
defineProps({
  label:  { type: String, default: '' },
  title:  { type: String, required: true },
  sub:    { type: String, default: '' },
  narrow: { type: Boolean, default: false },
})
</script>

<style scoped>
.section-hdr { margin-bottom: 48px; }
.section-hdr--narrow { max-width: 600px; }
.section-hdr__title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.15;
  margin-bottom: 14px;
}
.section-hdr__sub {
  font-size: 0.96rem;
  color: var(--color-text-muted);
  line-height: 1.78;
}
</style>
