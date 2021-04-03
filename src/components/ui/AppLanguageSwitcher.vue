<template>
  <div class="relative">
    <button
      @click="toggleOpen"
      v-on-clickaway="hideDropdown"
      @keydown.esc.exact="hideDropdown"
      href="#"
      class="flex items-center focus:outline-none"
    >
      <img
        :src="`${publicPath}img/flag_${selectedLocale}.svg`"
        class="w-5 h-5"
      />
      <span class="ml-2">{{ getLanguage(selectedLocale) }}</span>
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        ></path>
      </svg>
    </button>
    <transition
      enter-active-class="transition-all ease-in-out duration-50"
      leave-active-class="transition-all ease-in-out duration-50"
      enter-class="transform -translate-y-3 opacity-0"
      leave-to-class="transform -translate-y-3 opacity-0"
    >
      <ul
        v-if="isOpen"
        class="absolute z-10 w-32 mt-1 bg-white rounded shadow -right-2"
      >
        <li v-for="locale in locales" :key="locale">
          <a
            href="#"
            @click.prevent="setLocale(locale)"
            @keydown.esc.exact="hideDropdown"
            class="flex items-center p-3 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <img :src="`${publicPath}img/flag_${locale}.svg`" class="w-5 h-5" />
            <span class="ml-2">{{ getLanguage(locale) }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'AppLanguageSwitcher',
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
      locales: ['en', 'es'],
      selectedLocale: 'es',
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    getLanguage(code) {
      return code === 'en' ? 'English' : 'Espanol'
    },
    setLocale(locale) {
      this.selectedLocale = locale
      this.hideDropdown()
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    hideDropdown() {
      this.isOpen = false
    }
  }
}
</script>
