<template>
  <div id="app" class="mx-auto max-w-custom">
    <div class="mx-auto">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
    <div id="app-modals">
      <app-modal-choose-cinema></app-modal-choose-cinema>
      <app-modal-login></app-modal-login>
    </div>
  </div>
</template>

<script>
import AppFooter from '@/components/layouts/Footer'
import AppHeader from '@/components/layouts/Header'
import AppModalChooseCinema from '@/components/modals/AppModalChooseCinema'
import AppModalLogin from '@/components/modals/AppModalLogin'

export default {
  components: { AppFooter, AppHeader, AppModalChooseCinema, AppModalLogin }
}
</script>
