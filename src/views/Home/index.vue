<template>
  <div class="home">
    <home-carousel></home-carousel>
    <br />
    <home-billboard></home-billboard>
  </div>
</template>

<script>
import HomeBillboard from './HomeBillboard'
import HomeCarousel from './HomeCarousel'

export default {
  name: 'Home',
  components: {
    HomeBillboard,
    HomeCarousel
  }
}
</script>
