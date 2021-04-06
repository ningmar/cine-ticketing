<template>
  <div>
    <a
      v-on-clickaway="close"
      class="block py-2 cursor-pointer group lg:px-4"
      @click.prevent="toggleOpen"
    >
      <span
        class="align-middle group-hover:text-gray-900"
        :class="{ 'text-gray-900': isOpen }"
      >
        <!-- pass slot to override following text -->
        <slot>Mega Menu</slot>
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
      class="z-10 w-full mt-2 bg-white lg:absolute lg:left-0 lg:mt-6 lg:pt-12 lg:border lg:shadow-md"
    >
      <div class="lg:flex lg:flex-wrap lg:mb-2 lg:px-10">
        <slot name="megaMenu"></slot>
      </div>
      <div v-if="showServices" class="hidden px-12 py-4 bg-gray-100 lg:flex">
        <div class="flex items-center justify-center w-1/2 my-4">
          <svg
            class="mr-4 text-gray-900 stroke-current w-7 h-7 stroke-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              d="M24 40.5V44c0 2 .6 5-10.4 7A14.6 14.6 0 002 62h59a14.3 14.3 0 00-11.4-11C39 49 40 46 40 44v-5"
              fill="none"
            />
            <path
              d="M46.4 33H51a3.3 3.3 0 003-3v-7a3.3 3.3 0 00-3-3h-5m-28 0h-6a3.3 3.3 0 00-3 3v7a3.3 3.3 0 003 3h5.2"
              fill="none"
            />
            <path
              d="M46 18C26 18 26 4 26 4s1 12-8 15m18 43l9.6-12m-27.7 0L28 62M17.9 50a10.8 10.8 0 01-4.9-4c4-4 5-20 5-20m28 0s0 16 4 20a10.7 10.7 0 01-4.7 4"
              fill="none"
            />
            <path
              d="M26 42c-4.7-2.9-8-8.8-8-16V16C18 5.6 25.4 2 32 2s14 3.6 14 14v16c0 4-4 7-6 7"
              fill="none"
            />
            <path
              d="M40 38.9a2.9 2.9 0 00-2.9-2.9h-2.2a2.9 2.9 0 00-2.9 2.9 3 3 0 002.9 3.1H37a3 3 0 003-3.1z"
              fill="none"
            />
          </svg>
          <div>
            <h6 class="mb-2 text-gray-800">
              En nuestro formulario de contacto
            </h6>
            <p class="text-xs font-normal tracking-normal normal-case">
              Respuesta Asegurada
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center w-1/2 my-4">
          <svg
            class="mr-4 text-gray-900 stroke-current w-7 h-7 stroke-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              d="M38 42H4.4A2.4 2.4 0 012 39.6V12.4A2.4 2.4 0 014.4 10h43.2a2.4 2.4 0 012.4 2.4V22M2 18h48m-39.9 8H26m-16 8h7"
              fill="none"
            />
            <path
              fill="none"
              d="M38 38h24v16H38zm6 0V28a6 6 0 016-6 6 6 0 016 6v10m-6 6v4"
            />
          </svg>
          <div>
            <h6 class="mb-2 text-gray-800">Pago Seguro</h6>
            <p class="text-xs font-normal tracking-normal normal-case">
              Pago Seguro, Operación realizada en España
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'AppNavItemMegaMenu',
  mixins: [clickaway],
  props: {
    showServices: {
      type: Boolean,
      default: false
    }
  },
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
