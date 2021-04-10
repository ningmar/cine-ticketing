<template>
  <div>
    <register-carousel></register-carousel>
    <router-view></router-view>
  </div>
</template>

<script>
import RegisterCarousel from './RegisterCarousel'

export default {
  name: 'Register',
  components: {
    RegisterCarousel
  }
}
</script>
