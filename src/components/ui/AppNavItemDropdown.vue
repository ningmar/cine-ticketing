<template>
  <div>
    <a
      @click.prevent="toggleOpen"
      v-on-clickaway="close"
      class="relative group py-2 lg:px-4 block cursor-pointer"
    >
      <span
        class="align-middle group-hover:text-gray-900"
        :class="{ 'text-gray-900': isOpen }"
      >
        <!-- pass slot to override following text -->
        <slot>Nav Dropdown</slot>
      </span>
      <svg
        class="inline h-2.5 w-2.5 fill-current text-gray-500 group-hover:text-gray-900"
        :class="{ 'text-gray-900': isOpen }"
        viewBox="0 0 320 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M143.05 199.55l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
        />
      </svg>
    </a>
    <div
      v-if="isOpen"
      class="mt-2 bg-white normal-case font-normal tracking-normal flex flex-col lg:absolute lg:w-44 lg:mt-4 lg:border lg:shadow-md"
    >
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'AppNavItemDropdown',
  mixins: [clickaway],
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
    }
  }
}
</script>
