<template>
  <div>
    <top-bar />
    <div class="container">
      <nav-bar />
    </div>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import TopBar from '@/components/NavBar/TopBar'

import FooterComponent from '@/components/FooterPage/FooterComponent'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    FooterComponent,
    TopBar
  }
}
</script>
