<template>
  <PageHeader :title="e.pageTitle" :sub="e.pageSub" />

  <div class="group-photo-wrap">
    <div class="container">
      <img :src="groupPhoto" alt="Equipe LabTel &amp; LAIoT" class="group-photo" loading="lazy" />
    </div>
  </div>

  <template v-for="(cat, ci) in e.categories" :key="cat.key">
    <section v-if="cat.members.length" :class="['section', ci % 2 === 0 ? 'section--white' : 'section--soft']">
      <div class="container">
        <span class="badge-label">{{ cat.label }}</span>

        <!-- Professores: cards em destaque, foto grande + bio completa -->
        <div v-if="cat.key === 'professor'" class="featured-list">
          <div v-for="m in cat.members" :key="m.name" class="coord-card">
            <img :src="photoFor(m.img)" :alt="m.name" class="coord-avatar" loading="lazy" />
            <div class="coord-info">
              <h2 class="coord-name">{{ m.name }}</h2>
              <p class="coord-bio">{{ m.bio }}</p>
              <a
                v-if="hasLattes(m.lattes)"
                :href="m.lattes"
                target="_blank"
                rel="noopener"
                class="coord-link-primary"
              >{{ e.lattesLink }}</a>
            </div>
          </div>
        </div>

        <!-- Demais categorias: grid compacto -->
        <div v-else class="members-grid">
          <div v-for="m in cat.members" :key="m.name" class="member-card">
            <img :src="photoFor(m.img)" :alt="m.name" class="member-avatar" loading="lazy" />
            <div>
              <div class="member-name">{{ m.name }}</div>
              <p class="member-bio">{{ m.bio }}</p>
              <a
                v-if="hasLattes(m.lattes)"
                :href="m.lattes"
                target="_blank"
                rel="noopener"
                class="member-link"
              >{{ e.lattesLink }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useLangStore } from '../stores/lang.js'
import PageHeader from '../components/PageHeader.vue'
import groupPhoto from '../assets/imgs/carousel/carrousel_0.png'

const lang = useLangStore()
const e = computed(() => lang.t.equipe)

const photoModules = import.meta.glob('../assets/imgs/equipe/*', { eager: true, import: 'default' })
const photosByName = {}
for (const path in photoModules) {
  photosByName[path.split('/').pop()] = photoModules[path]
}
const fallbackPhoto = photosByName['semFotoImagem.jpg']

function photoFor(imgPath) {
  const filename = imgPath ? imgPath.split('/').pop() : ''
  return photosByName[filename] || fallbackPhoto
}

function hasLattes(lattes) {
  return !!lattes && !/n[ãa]o dispon[íi]vel/i.test(lattes) && !/not available/i.test(lattes)
}
</script>

<style scoped>
.group-photo-wrap {
  background: white;
  padding: 40px 0 0;
}
.group-photo {
  display: block;
  width: 100%;
  border-radius: var(--radius);
}

.section { padding: 88px 0; }
.section--white { background: white; }
.section--soft  { background: var(--color-bg-soft); }

.badge-label { display: inline-block; margin-bottom: 24px; }

/* Professores */
.featured-list { display: flex; flex-direction: column; gap: 24px; }
.coord-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  align-items: start;
  padding: 32px;
  background: white;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
}
.section--soft .coord-card { background: white; }
.coord-avatar {
  width: 96px; height: 96px;
  border-radius: 50%;
  object-fit: cover;
  flex: none;
  background: var(--color-bg-soft);
}
.coord-name { font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; color: var(--color-text); margin-bottom: 10px; }
.coord-bio  { font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.78; margin-bottom: 14px; }
.coord-link-primary { font-size: 0.82rem; color: var(--color-primary-mid); font-weight: 600; transition: color 0.2s; }
.coord-link-primary:hover { color: var(--color-primary); }

/* Demais categorias */
.members-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.member-card {
  background: white;
  border: 1px solid #E0E8F4;
  border-radius: var(--radius);
  padding: 22px 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: box-shadow 0.22s;
}
.member-card:hover { box-shadow: 0 4px 20px rgba(0,51,102,0.08); }
.member-avatar {
  flex: none;
  width: 56px; height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--color-bg-soft);
}
.member-name  { font-size: 0.92rem; font-weight: 700; color: var(--color-text); margin-bottom: 6px; }
.member-bio   { font-size: 0.8rem; color: var(--color-text-subtle); line-height: 1.68; margin-bottom: 8px; }
.member-link  { font-size: 0.76rem; color: var(--color-primary-mid); font-weight: 600; transition: color 0.2s; }
.member-link:hover { color: var(--color-primary); }

@media (max-width: 900px) {
  .coord-card { grid-template-columns: 1fr; gap: 18px; }
  .members-grid { grid-template-columns: 1fr; }
}
</style>
