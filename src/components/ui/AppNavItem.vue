<template>
  <router-link
    :to="to"
    class="block py-2 group lg:px-4"
    active-class="text-gray-900"
  >
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
