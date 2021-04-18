<template>
  <footer>
    <footer-services></footer-services>
    <footer-links></footer-links>
    <footer-copyright></footer-copyright>
  </footer>
</template>

<script>
import FooterCopyright from './FooterCopyright'
import FooterLinks from './FooterLinks'
import FooterServices from './FooterServices'

export default {
  name: 'AppFooter',
  components: {
    FooterCopyright,
    FooterLinks,
    FooterServices
  }
}
</script>
