<template>
  <div class="mb-7">
    <div class="relative border-b-2 border-gray-500 hover:border-purple-500">
      <div
        v-if="$slots.ribbon"
        style="letter-spacing: 0.3em; background-color: #17a2b8;"
        class="absolute z-10 inline-block px-4 py-1 text-sm text-center text-white uppercase ribbon top-3 -left-3"
      >
        <slot name="ribbon"></slot>
      </div>
      <slot name="image"></slot>
      <div
        class="absolute inset-0 flex items-center justify-center transition-all duration-500 bg-white opacity-0 bg-opacity-90 hover:opacity-100"
      >
        <a
          @click.prevent=""
          style="letter-spacing: 0.3em"
          class="flex items-center h-10 px-8 mx-2 text-xs font-bold leading-10 text-center text-white uppercase transition-all duration-300 bg-gray-700 cursor-pointer trac hover:bg-gray-800 "
        >
          <slot name="action">Action</slot>
        </a>
      </div>
    </div>
    <div class="py-2">
      <p v-if="$slots.label" class="mb-1 text-xs text-gray-500">
        <slot name="label"></slot>
      </p>
      <h3
        v-if="$slots.title"
        class="flex items-center mb-1 text-sm font-bold leading-none tracking-widest"
      >
        <slot name="title"></slot>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard'
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
  border-top: 14px solid #0c525d;
}
</style>
