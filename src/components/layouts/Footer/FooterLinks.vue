<template>
  <section class="py-16 bg-gray-200 md:py-24">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap md:px-4">
        <div class="w-full px-4 mb-12 lg:w-1/3 lg:mb-0">
          <h6
            class="mb-4 text-lg font-bold tracking-widest text-gray-800 uppercase"
          >
            Artesiete cines.
          </h6>
          <ul class="mb-4">
            <li class="inline-block mr-3">
              <a
                href="https://www.facebook.com/cinesartesiete/"
                target="_blank"
                title="Facebook"
              >
                <svg
                  class="w-3.5 h-3.5 text-gray-500 fill-current hover:text-purple-500"
                  viewBox="0 0 448 448"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M448 24.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V274.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8V70.3c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V448H24.7C11.1 448 0 436.9 0 423.3V24.7C0 11.1 11.1 0 24.7 0h398.5C436.9 0 448 11.1 448 24.7z"
                  />
                </svg>
              </a>
            </li>
            <li class="inline-block mr-3">
              <a
                href="https://twitter.com/cinesartesiete"
                target="_blank"
                title="Twitter"
              >
                <svg
                  class="w-3.5 h-3.5 text-gray-500 fill-current hover:text-purple-500"
                  viewBox="0 0 512 416"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M459.37 103.634c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954C87.39 82.842 165.035 124.425 252.1 128.974c-1.624-7.797-2.599-15.918-2.599-24.04C249.501 47.106 296.283 0 354.435 0c30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full px-4 mb-12 sm:w-1/2 lg:w-1/3 lg:mb-0">
          <h6
            class="mb-4 text-sm font-bold tracking-widest text-gray-800 uppercase"
          >
            Nuestra Empresa
          </h6>
          <ul class="mb-4 text-sm text-gray-400">
            <li>
              <router-link
                class="hover:underline"
                :to="{ name: 'check-purchase' }"
              >
                Comprueba Compra
              </router-link>
            </li>
            <li>
              <router-link
                class="hover:underline"
                :to="{ name: 'access-room' }"
              >
                Acceso a la Sala
              </router-link>
            </li>
            <li>
              <router-link class="hover:underline" to="/contacto"
                >Contacto Empresa</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/trabajaconnosotros"
                >Trabaja con Nosotros</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/cookies"
                >Política de Cookies</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/legal"
                >Aviso Legal</router-link
              >
            </li>
          </ul>
        </div>
        <div class="w-full px-4 mb-12 sm:w-1/2 lg:w-1/3 lg:mb-0">
          <h6
            class="mb-4 text-sm font-bold tracking-widest text-gray-800 uppercase"
          >
            Nuestros Cines
          </h6>
          <ul class="mb-4 text-sm text-gray-400">
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete La Torre (Zaragoza)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Holea (Huelva)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Fan (Mallorca)
              </router-link>
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Las Terrazas (Telde)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Alcala (Madrid)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Alfares (Talavera)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Lucena</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Nalón (El Entrego)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Caudalia (Mieres)</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Ecija</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Cines Ubeda</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Segovia</router-link
              >
            </li>
            <li>
              <router-link class="hover:underline" to="/"
                >Artesiete Alhsur (La Zubia)</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterLinks'
}
</script>
