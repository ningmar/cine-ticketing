<template>
  <router-link :to="to" class="group py-2 lg:px-4 block">
    <span class="align-middle group-hover:text-gray-900">
      <!-- pass slot to override following text -->
      <slot>Nav Item</slot>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'AppNavItem',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
