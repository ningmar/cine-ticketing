<template>
  <div class="home">
    <home-carousel></home-carousel>
    <br />
    <home-billboard></home-billboard>
    <home-promotions></home-promotions>
    <home-next-releases></home-next-releases>
  </div>
</template>

<script>
import HomeBillboard from './HomeBillboard'
import HomeCarousel from './HomeCarousel'
import HomePromotions from './HomePromotions'
import HomeNextReleases from './HomeNextReleases'

export default {
  name: 'Home',
  components: {
    HomeBillboard,
    HomeCarousel,
    HomePromotions,
    HomeNextReleases
  }
}
</script>
