<template>
  <div class="p-4 text-sm text-gray-600 bg-gray-50">
    <div class="flex items-center justify-end sm:px-4 sm:justify-between">
      <ul class="hidden sm:flex">
        <li class="pr-4">
          <router-link
            :to="{ name: 'contact-company' }"
            class="flex items-center"
          >
            <svg
              class="w-4.5 h-4.5 mr-2 stroke-current stroke-4"
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
              Ayuda a la compra: click aquí
            </span>
          </router-link>
        </li>
        <li class="px-4 border-l-2">
          <router-link
            :to="{ name: 'contact-company' }"
            class="hover:underline"
          >
            Contacto Empresa
          </router-link>
        </li>
      </ul>
      <!-- Language Dropdown -->
      <div class="px-2 border-r-2">
        <app-language-switcher></app-language-switcher>
      </div>
    </div>
  </div>
</template>

<script>
import AppLanguageSwitcher from '@/components/ui/AppLanguageSwitcher'

export default {
  name: 'HeaderTopbar',
  components: {
    AppLanguageSwitcher
  }
}
</script>
