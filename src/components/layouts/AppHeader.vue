<template>
  <div>
    <!-- Top Bar -->
    <div class="bg-gray-100 p-4 text-sm text-gray-500">
      <div class="sm:px-4 flex justify-end sm:justify-between items-center">
        <ul class="hidden sm:flex">
          <li class="pr-4">
            <a href="#" class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-gray-900"
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
                Help with the purchase: Click Here
              </span>
            </a>
          </li>
          <li class="px-4 border-l-2">
            <a href="#" class="hover:underline">
              Contact Company
            </a>
          </li>
        </ul>
        <!-- Language Dropdown -->
        <div class="px-2 border-r-2">
          <language-switcher></language-switcher>
        </div>
      </div>
    </div>
  </div>
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
      username: 'John Wick',
      email: 'dontkillmydog@johnwick.com'
    }
  }
}
</script>
