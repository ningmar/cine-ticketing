<template>
  <div class="home">
    <home-carousel></home-carousel>
    <br />
    <home-billboard></home-billboard>
    <home-promotions></home-promotions>
  </div>
</template>

<script>
import HomeBillboard from './HomeBillboard'
import HomeCarousel from './HomeCarousel'
import HomePromotions from './HomePromotions'

export default {
  name: 'Home',
  components: {
    HomeBillboard,
    HomeCarousel,
    HomePromotions
  }
}
</script>
