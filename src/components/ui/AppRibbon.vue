<template>
  <div
    style="letter-spacing: 0.3em;"
    :style="cssVars"
    class="absolute z-10 inline-block px-4 py-1 text-center text-white uppercase ribbon top-3 -left-3"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppRibbon',
  props: {
    bgColor: {
      type: String,
      default: '#17a2b8'
    },
    btColor: {
      type: String,
      default: '#0c525d'
    },
    fontSize: {
      type: String,
      default: '0.9rem'
    }
  },
  computed: {
    cssVars() {
      return {
        '--ribbon-bg-color': this.bgColor,
        '--ribbon-bt-color': this.btColor,
        '--ribbon-font-size': this.fontSize
      }
    }
  }
}
</script>

<style scoped>
.ribbon {
  background-color: var(--ribbon-bg-color);
  font-size: var(--ribbon-font-size);
}

.ribbon::before {
  position: absolute;
  left: 0;
  bottom: -14px;
  content: '';
  border-left: 12px solid transparent;
  border-right: 0 solid transparent;
  border-top: 14px solid var(--ribbon-bt-color);
}
</style>
