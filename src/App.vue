<template>
  <div id="app">
    <div class="container mx-auto">
      <nav-bar />
      <router-view />
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import NavBar from './components/layouts/NavBar'
import AppFooter from './components/layouts/AppFooter'

export default {
  components: { NavBar, AppFooter }
}
</script>
<style></style>
