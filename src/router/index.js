import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'

import InicialSection from '@/components/Sections/InicialSection'

import TeamSection from '@/components/Sections/TeamSection'
import MembersComponent from '@/components/BodyPage/Team/MembersComponent'

import ResearchLinesSection from '@/components/Sections/ResearchLinesSection'

import PublicationsSection from '@/components/Sections/PublicationsSection'
import PublicationsComponent from '@/components/BodyPage/Publications/PublicationsComponent'

import ThesesAndDissertationsSection from '@/components/Sections/ThesesAndDissertationsSection'
import ThesesComponent from '@/components/BodyPage/Theses/ThesesComponent'

import EventsSection from '@/components/Sections/EventsSection'
import PhotoGallerySection from '@/components/Sections/PhotoGallerySection'
import ContactSection from '@/components/Sections/ContactSection'

import ResearchTopicsComponent from '@/components/BodyPage/Research/ResearchTopicsComponent'

// import EventPage from '@/components/Pages/Event/EventPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: InicialSection
      },
      {
        path: '',
        name: 'Equipe',
        component: TeamSection,
        children: [
          {
            path: 'teammember/:tipo',
            name: 'TeamMember',
            props: true,
            component: MembersComponent
          },
        ]
      },
      {
        path: '',
        name: 'LinhaDePesquisa',
        component: ResearchLinesSection,
        children: [
          {
            path: 'researchline/:tipo',
            name: 'ResearchLine',
            props: true,
            component: ResearchTopicsComponent
          }
        ]
      },
      {
        path: '',
        name: 'Publicacoes',
        component: PublicationsSection,
        children: [
          {
            path: 'publications/:tipo',
            name: 'Publications',
            props: true,
            component: PublicationsComponent
          }
        ]
      },
      {
        path: '',
        name: 'TeseseDissertacoes',
        component: ThesesAndDissertationsSection,
        children: [
          {
            path: 'theses/:tipo',
            name: 'Theses',
            props: true,
            component: ThesesComponent
          }
        ]
      },
      {
        path: '',
        name: 'Eventos',
        component: EventsSection
      },
      {
        path: '',
        name: 'GaleriadeFotos',
        component: PhotoGallerySection
      },
      {
        path: '',
        name: 'Contato',
        component: ContactSection
      }
    ]
  },
  // {
  //   path: '/eventos',
  //   name: 'ApresentacaoEvento',
  //   component: EventPage,
  //   children: [
  //     // {
  //     //   path: '',
  //     //   name: 'Primeiro',
  //     //   component: EventSection
  //     // }
  //   ]
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router