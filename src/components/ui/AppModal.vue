<template>
  <transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
    enter-class="opacity-0 -top-20"
    leave-to-class="opacity-0 -top-20"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 overflow-y-auto"
      :class="{
        'bg-black': !fullscreen,
        'bg-opacity-30': !fullscreen,
        'bg-white': fullscreen
      }"
    >
      <button
        v-if="fullscreen"
        class="absolute w-12 h-12 top-5 right-10 focus:outline-none"
        @click="close"
      >
        <svg
          class="w-full h-full text-gray-700 stroke-current stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M41.999 20.002l-22 22m22 0L20 20" />
        </svg>
      </button>
      <slot name="content" :close="close"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    name: {
      type: String,
      required: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOpen() {
      return this.$store.getters['modals/allOpen'].includes(this.name)
    }
  },
  beforeDestroy() {
    if (this.isOpen) this.close()
  },
  methods: {
    close() {
      this.$store.dispatch('modals/close', this.name)
    }
  }
}
</script>
