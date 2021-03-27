<template>
  <header class="bg-white" :class="{ scrolled: sticky }">
    <!-- Top Bar -->
    <div class="bg-gray-100 p-4 text-sm text-gray-600">
      <div class="sm:px-4 flex justify-end sm:justify-between items-center">
        <ul class="hidden sm:flex">
          <li class="pr-4">
            <a href="#" class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  d="M2 12h60v40H2z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
              <span>
                Ayuda a la compra: Click Aquí
              </span>
            </a>
          </li>
          <li class="px-4 border-l-2">
            <a href="#" class="hover:underline">
              Contacto Empresa
            </a>
          </li>
        </ul>
        <!-- Language Dropdown -->
        <div class="px-2 border-r-2">
          <language-switcher></language-switcher>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <nav class="p-4 lg:flex lg:items-center">
      <!-- Brand Logo Container-->
      <div class="py-1 lg:px-4 flex justify-between items-center">
        <a href="#" class="mr-4">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="60"
            viewBox="0 0 600 361"
          >
            <g fill="currentColor">
              <path
                d="M228 20v20h51.9c31 0 54 .4 57.2 1 11.4 2.2 16 9 16.7 24.6l.5 10.3-72.9.3c-65.4.4-73.5.6-78.8 2.1-12.9 3.8-22.7 11.5-28.1 22.3l-3 5.9V159c0 52.1 0 52.5 2.2 58 4.9 11.9 14.7 21 27.3 25.3 6.4 2.1 7.8 2.2 63.3 2.5l56.7.3V201h-47.7c-29.8 0-49.2-.4-51.5-1-5-1.4-9.7-5.5-11.9-10.5-1.7-3.6-1.9-7-1.9-31.3 0-29.2.4-31.7 5.3-37 5-5.3 3.2-5.2 67-5.2h59.4l3.3 2.2c1.8 1.3 4.3 3.6 5.4 5.1 2.1 2.8 2.1 3.8 2.4 62.3l.3 59.4H389V116h45l-.2-19.8-.3-19.7-22.2-.3L389 76V59.7c-.1-26.3-2.4-36.5-10.7-45.7-5.5-6.2-11.5-9.8-20.2-12.2-6-1.7-11.5-1.8-68.3-1.8H228v20z"
              />
              <path
                d="M420.2 134.8c-.7.5-2 3.2-3 6.2-1.9 6.1-3.8 7.4-4.8 3.4-.5-2.1-.2-3.1 1.5-4.5 2.4-2 1.9-4.9-1-4.9-4.9 0-6.7 10.3-2.4 14.5 2.7 2.8 3.3 2.9 6.9 1.5 1.8-.7 2.9-2.2 4-6 2-6.7 2.5-7.4 4.2-5.9 2.1 1.7 1.8 6.6-.6 7.9-2.5 1.4-2.7 5-.2 5 1 0 2.8-1 4-2.3 3-3.1 3.1-10.8.2-13.7-2-2-6.5-2.6-8.8-1.2zM413.1 155.4c-8.4 4.6-5.7 17.5 3.9 19.1 4.8.8 10.5-.9 12.5-3.8 1.8-2.6 1.9-10.6.2-12.8-1.1-1.5-4.9-3.9-6.1-3.9-1.6 0-.4 5.1 1.5 6 2.9 1.6 2.3 7-1.1 8.7l-2.5 1.2-.3-7.9c-.3-8-.3-8-3-8-1.5.1-3.8.7-5.1 1.4zM410 180c-2.1 2.1-2.7 7.4-1 10 .6.9.5 1.7-.2 2.1-.6.4-.8 1.4-.5 2.3.5 1.3 2.5 1.6 11.7 1.6h11v-2.5c0-2.5-.1-2.5-7.9-2.5-7.1 0-8.2-.2-9.5-2.2-2-2.8-2-3.3 0-5.2 1.1-1.2 3.6-1.6 9.5-1.6 7.2 0 7.9-.2 7.9-2 0-1.9-.7-2-9.5-2-8.2 0-9.8.3-11.5 2zM410.9 209.9c-2.1 2.2-2.9 3.9-2.9 6.6 0 2.7.8 4.4 2.9 6.6 2.6 2.6 3.6 2.9 9.1 2.9 7.9 0 11-2.6 11-9.3 0-5.2-2.1-8.3-6.2-9.3-2.5-.5-2.8-.3-2.8 1.8 0 1.5.8 2.7 2.3 3.3 1.6.7 2.2 1.8 2.2 4 0 5.5-8.8 7.2-13 2.5-2-2.2-1.3-5.6 1.4-6.5 1.3-.4 1.7-1.2 1.3-3-.6-3.2-1.7-3.1-5.3.4zM316.9 278.3c-6.7 4.4-9.3 14.3-6.5 24.1 1.5 4.9 3 7.1 12 16.5 12 12.6 14.7 17.6 12.7 24.1-1.5 5-6.2 9-10.6 9-3.9 0-9.3-4.6-11.4-9.8-1.6-3.8-1.8-3.8-5.5-.9l-2.8 2.3 2 4.1c4.9 9.5 10.1 13.3 18.4 13.3 11.6 0 19.8-10.6 18.5-24-.7-8.2-3.7-13.1-15.3-25.1-10.9-11.3-12.6-14.7-10.7-20.5 1.3-4 5.5-6.8 8.8-6 2.9.7 7.3 4.6 9.3 8.1 1.1 1.9 1.2 1.9 4.3-1.1l3.1-3.2-3.2-4.7c-1.7-2.5-4.6-5.5-6.3-6.6-4.6-2.7-12.4-2.6-16.8.4zM27.6 283.7c-1.4 3.8-3.6 9.7-4.9 13.3-1.4 3.6-7 18.5-12.6 33.3C4.6 345 0 357.7 0 358.5c0 1.1 1.1 1.5 3.9 1.5h3.8l5-13.3 4.9-13.2 13.5-.3 13.5-.3 5 13.3 5 13.3 4.2.3c2.3.2 4.2.1 4.2-.2 0-1.1-28.7-78.2-30.1-80.8-1.6-3-2.6-2.1-5.3 4.9zm8.8 27.2c2.5 6.9 4.6 12.6 4.6 12.8 0 .2-4.5.3-9.9.3h-9.9l4.9-12.7c2.7-7 4.9-12.9 4.9-13.2 0-1.4 1.3 1.7 5.4 12.8zM97 318.5V360h7v-19.1c0-17 .2-19 1.6-18.7.9.2 6.9 8.7 13.2 19l11.6 18.8h4.3c2.4 0 4.3-.4 4.3-1 0-.5-4.9-8.9-10.9-18.7-8.7-14.1-10.6-17.9-9.3-18.1 13.7-2.7 19.2-9.1 19.2-22.7 0-8.6-2.3-14.1-7.4-18-4-3-11.8-4.3-26.3-4.4L97 277v41.5zm26.4-30.5c6.1 2.3 8.6 13 4.5 19.6-2.5 4.1-6.6 5.4-16.6 5.4H104v-26h8.4c4.7 0 9.6.4 11 1zM169.7 277.7c-.4.3-.7 2.6-.7 5v4.3h15v73h7v-73h15v-10h-17.8c-9.8 0-18.2.3-18.5.7zM239 318.5V360l18.8-.2 18.7-.3.3-4.8.3-4.7H246v-30h31v-9h-31v-24h31v-10h-38v41.5zM380.5 278.3c-.3.6-.4 19.2-.3 41.2l.3 40 3.8.3 3.7.3V277h-3.5c-2 0-3.8.6-4 1.3zM426.5 278.3c-.3.6-.4 19.2-.3 41.2l.3 40 18.8.3 18.7.2v-10h-30v-30h30v-9h-30v-24h30v-10h-18.5c-13.9 0-18.7.3-19 1.3zM493 282v5h14l.2 36.2.3 36.3 3.8.3 3.7.3v-73l7.3-.3 7.2-.3v-9l-18.2-.3-18.3-.2v5zM562.5 278.3c-.3.6-.4 19.2-.3 41.2l.3 40 18.8.3 18.7.2v-10h-30v-30h30v-9h-30v-24h30v-10h-18.5c-13.9 0-18.7.3-19 1.3z"
              />
            </g>
          </svg>
        </a>
        <!-- Mobile menu button-->
        <div class="lg:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Menu Icon -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                v-if="isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Nav Lists -->
      <div
        :class="isMenuOpen ? 'block' : 'hidden'"
        class="my-2 w-full lg:flex lg:justify-between uppercase text-sm text-gray-500 tracking-widest font-extrabold"
      >
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Inicio
          </span>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Nuestros Cines
          </span>
          <svg
            class="inline h-2.5 w-2.5 ml-1 fill-current text-gray-500 group-hover:text-gray-900"
            viewBox="0 0 320 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143.05 199.55l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
            />
          </svg>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Cartelera
          </span>
          <svg
            class="inline h-2.5 w-2.5 ml-1 fill-current text-gray-500 group-hover:text-gray-900"
            viewBox="0 0 320 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143.05 199.55l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
            />
          </svg>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Promociones
          </span>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Grupos
          </span>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Tu Compra
          </span>
          <svg
            class="inline h-2.5 w-2.5 ml-1 fill-current text-gray-500 group-hover:text-gray-900"
            viewBox="0 0 320 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143.05 199.55l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
            />
          </svg>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <span class="align-middle group-hover:text-gray-900">
            Tarjeta Artesiete
          </span>
          <svg
            class="inline h-2.5 w-2.5 ml-1 fill-current text-gray-500 group-hover:text-gray-900"
            viewBox="0 0 320 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143.05 199.55l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
            />
          </svg>
        </a>
        <a href="#" class="group py-2 lg:px-4">
          <svg
            class="h-6 w-6 mr-2 lg:mr-0 stroke-current stroke-3 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              d="M50.9 55.3a12.2 12.2 0 00-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 004.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 004.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 00-4.3 1.6"
              fill="none"
            />
            <circle cx="32" cy="32" r="30" fill="none" />
          </svg>
          <span class="hidden sm:block lg:hidden">
            Login
          </span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import LanguageSwitcher from '../LanguageSwitcher'

export default {
  name: 'AppHeader',
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      isMenuOpen: false,
      sticky: false,
      username: 'John Wick',
      email: 'dontkillmydog@johnwick.com'
    }
  },
  methods: {
    handleScroll() {
      // 56 is height of top bar including padding
      if (window.pageYOffset > 56) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
header.scrolled {
  /* applying all in single line gives editor error */
  @apply fixed;
  @apply -top-14;
  @apply left-0;
  @apply w-full;
  @apply shadow-xl;
}
</style>
