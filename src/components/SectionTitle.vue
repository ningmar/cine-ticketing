<template>
  <div class="mb-12 text-center">
    <h2 class="text-4xl font-bold tracking-widest uppercase">
      - {{ title }} -
    </h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String
  }
}
</script>
