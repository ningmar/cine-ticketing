<template>
  <app-modal name="login" class="px-8 pt-20 pb-8 md:pt-28">
    <template #content="slotProps">
      <app-form-login
        v-on-clickaway="slotProps.close"
        v-scroll-lock="slotProps.isOpen"
      >
        <template #close-btn>
          <button
            class="absolute w-12 h-12 bg-gray-700 -top-1 -right-1 focus:outline-none"
            @click="slotProps.close"
          >
            <svg
              class="w-full h-full text-white stroke-current stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M41.999 20.002l-22 22m22 0L20 20" />
            </svg>
          </button>
        </template>
      </app-form-login>
    </template>
  </app-modal>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import AppFormLogin from '@/components/ui/AppFormLogin'
import AppModal from '@/components/modals/AppModal'

export default {
  name: 'AppModalLogin',
  components: {
    AppFormLogin,
    AppModal
  },
  mixins: [clickaway]
}
</script>
