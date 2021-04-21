<template>
  <header class="z-20 bg-white" :class="{ scrolled: sticky }">
    <header-topbar></header-topbar>
    <header-navbar></header-navbar>
  </header>
</template>

<script>
import HeaderNavbar from './HeaderNavbar'
import HeaderTopbar from './HeaderTopbar'

export default {
  name: 'AppHeader',
  components: {
    HeaderNavbar,
    HeaderTopbar
  },
  data() {
    return {
      sticky: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // 56 is height of top bar including padding
      if (window.pageYOffset > 56) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    }
  }
}
</script>

<style scoped>
header.scrolled {
  @apply fixed -top-14 left-0 w-full shadow-xl;
}
</style>
