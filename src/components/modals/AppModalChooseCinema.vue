<template>
  <app-modal name="choose-cinema" :fullscreen="true">
    <template #content>
      temp
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/modals/AppModal'

export default {
  name: 'AppModalChooseCinema',
  components: {
    AppModal
  },
  mounted() {
    console.log('mounted choose cinema')
  }
}
</script>
