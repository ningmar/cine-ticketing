<template>
  <div id="app" class="mx-auto max-w-custom">
    <div class="mx-auto">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/layouts/Header'
import AppFooter from './components/layouts/Footer'

export default {
  components: { AppHeader, AppFooter }
}
</script>
