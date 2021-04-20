<template>
  <div class="fixed inset-0 z-40 overflow-y-auto bg-black bg-opacity-30">
    <div class="max-w-5xl mx-auto">
      <div class="relative bg-white bg-clip-padding">
        <button
          class="absolute w-12 h-12 bg-gray-700 -top-1 -right-1 focus:outline-none"
          @click="close"
        >
          <svg
            class="w-full h-full text-white stroke-current stroke-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M41.999 20.002l-22 22m22 0L20 20" />
          </svg>
        </button>
        <div class="py-4">
          <div
            v-if="$slots.ribbon"
            style="letter-spacing: 0.3em; background-color: #9a6ee2; font-size: 0.8rem;"
            class="absolute z-40 inline-block px-4 py-1 text-center text-white uppercase ribbon top-8 -left-3"
          >
            <slot name="ribbon"></slot>
          </div>
          <div class="flex flex-col items-center md:flex-row md:py-2">
            <div v-if="$slots.image" class="flex-1 px-4">
              <slot name="image"></slot>
              <div v-if="$slots.image" class="my-3 text-center">
                <app-button class="bg-yellow-300 hover:bg-yellow-400">
                  <slot name="button">Ver Trailer</slot>
                </app-button>
              </div>
            </div>
            <div class="flex-1 px-4">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'AppModal',
  components: {
    AppButton
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.ribbon::before {
  position: absolute;
  left: 0;
  bottom: -14px;
  content: '';
  border-left: 12px solid transparent;
  border-right: 0 solid transparent;
  border-top: 14px solid #6227c3;
}
</style>
