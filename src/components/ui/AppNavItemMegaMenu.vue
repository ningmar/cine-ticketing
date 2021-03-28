<template>
  <div>
    <a
      @click="isOpen = !isOpen"
      class="group py-2 lg:px-4 block cursor-pointer"
    >
      <span class="align-middle group-hover:text-gray-900">
        <!-- pass slot to override following text -->
        <slot>Mega Menu</slot>
      </span>
      <svg
        class="inline h-2.5 w-2.5 fill-current text-gray-500 group-hover:text-gray-900"
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
      class="w-full bg-white mt-2 lg:absolute lg:left-0 lg:mt-6 lg:pt-12 lg:px-10 lg:border lg:shadow-md"
    >
      <div class="lg:flex lg:flex-wrap lg:items-start">
        <slot name="megaMenu"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavItemMegaMenu',
  props: {
    mega: {
      type: Boolean
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
