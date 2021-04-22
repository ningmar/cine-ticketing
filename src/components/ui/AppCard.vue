<template>
  <div class="mb-7">
    <div class="relative border-b-2 border-gray-500 hover:border-purple-500">
      <slot name="ribbon"></slot>
      <slot name="image"></slot>
      <div
        class="absolute inset-0 flex items-center justify-center transition-all duration-500 bg-white opacity-0 bg-opacity-90 hover:opacity-100"
      >
        <button
          style="letter-spacing: 0.3em"
          class="flex items-center h-10 px-8 mx-2 text-xs font-bold leading-10 text-center text-white uppercase transition-all duration-300 bg-gray-700 cursor-pointer hover:bg-gray-800"
          @click.prevent=""
        >
          <slot name="action">Action</slot>
        </button>
      </div>
    </div>
    <div class="py-2">
      <p v-if="$slots.label" class="mb-1 text-xs text-gray-500">
        <slot name="label"></slot>
      </p>
      <h3
        v-if="$slots.title"
        style="line-height: 1.15"
        class="mb-1 text-sm font-bold tracking-extrawide"
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
