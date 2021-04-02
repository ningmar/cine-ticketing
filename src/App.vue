<template>
  <div id="app" class="max-w-custom mx-auto">
    <div class="mx-auto">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/layouts/AppHeader'
import AppFooter from './components/layouts/AppFooter'

export default {
  components: { AppHeader, AppFooter }
}
</script>
