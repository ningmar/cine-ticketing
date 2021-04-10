<template>
  <div class="mb-4 text-gray-400">
    <label v-if="label" class="block mb-2 text-xs tracking-widest uppercase">
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      class="w-full px-3 py-2.5 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-500 focus:outline-none"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    placeholder: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: 'text' },
    required: { type: Boolean, required: false, default: false }
  }
}
</script>
