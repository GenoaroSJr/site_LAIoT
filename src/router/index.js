import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',             component: () => import('../views/HomeView.vue') },
  { path: '/sobre',        component: () => import('../views/SobreView.vue') },
  { path: '/pesquisa',     component: () => import('../views/PesquisaView.vue') },
  { path: '/equipe',       component: () => import('../views/EquipeView.vue') },
  { path: '/publicacoes',  component: () => import('../views/PublicacoesView.vue') },
  { path: '/teses',        component: () => import('../views/TesesView.vue') },
  { path: '/projetos',     component: () => import('../views/ProjetosView.vue') },
  { path: '/galeria',      component: () => import('../views/GaleriaView.vue') },
  { path: '/contato',      component: () => import('../views/ContatoView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
