<template>
  <div class="mx-auto">
    <div
      class="flex flex-wrap bg-gray-100 px-4 py-10 md:py-17 lg:py-24 md:divide-x divide-black"
    >
      <div class="flex mb-6 md:mb-0 md:flex-1 justify-center items-center">
        <div class="w-12 h-12 mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path
              data-name="layer2"
              d="M38 42H4.4A2.4 2.4 0 012 39.6V12.4A2.4 2.4 0 014.4 10h43.2a2.4 2.4 0 012.4 2.4V22M2 18h48m-39.9 8H26m-16 8h7"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              data-name="layer1"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              d="M38 38h24v16H38zm6 0V28a6 6 0 016-6 6 6 0 016 6v10m-6 6v4"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="text-left">
          <h2 class="uppercase font-bold text-base mb-2">Pago Seguro</h2>
          <p class="text-gray-400 text-xs">
            Pago Seguro, Operacion realizada en Espana
          </p>
        </div>
      </div>

      <div class="flex md:flex-1 justify-center items-center">
        <div class="w-12 h-12 mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path
              data-name="layer2"
              d="M24 40.5V44c0 2 .6 5-10.4 7A14.6 14.6 0 002 62h59a14.3 14.3 0 00-11.4-11C39 49 40 46 40 44v-5"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              data-name="layer1"
              d="M46.4 33H51a3.3 3.3 0 003-3v-7a3.3 3.3 0 00-3-3h-5m-28 0h-6a3.3 3.3 0 00-3 3v7a3.3 3.3 0 003 3h5.2"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              data-name="layer2"
              d="M46 18C26 18 26 4 26 4s1 12-8 15m18 43l9.6-12m-27.7 0L28 62M17.9 50a10.8 10.8 0 01-4.9-4c4-4 5-20 5-20m28 0s0 16 4 20a10.7 10.7 0 01-4.7 4"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              data-name="layer2"
              d="M26 42c-4.7-2.9-8-8.8-8-16V16C18 5.6 25.4 2 32 2s14 3.6 14 14v16c0 4-4 7-6 7"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              data-name="layer1"
              d="M40 38.9a2.9 2.9 0 00-2.9-2.9h-2.2a2.9 2.9 0 00-2.9 2.9 3 3 0 002.9 3.1H37a3 3 0 003-3.1z"
              fill="none"
              stroke="var(--layer1, #202020)"
              stroke-miterlimit="10"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="text-left">
          <h2 class="uppercase font-bold text-base mb-2">Pago Seguro</h2>
          <p class="text-gray-400 text-xs">
            Pago Seguro, Operacion realizada en Espana
          </p>
        </div>
      </div>
    </div>
    <!-- for main footer section -->
    <div class="bg-gray-200 py-10 md:py-15 lg:py-20">
      <div class="flex flex-wrap px-4 lg:mx-36 md:mx-10">
        <div class="w-full lg:w-1/3">
          <h3
            class="text-gray-900 uppercase text-base tracking-widest font-bold my-4"
          >
            Artesiete cines
          </h3>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3">
          <h3 class="text-gray-900 uppercase text-base tracking-widest my-4">
            Nuestra Empres
          </h3>
          <a
            v-for="(link, index) in footerLinks"
            :key="index"
            :href="link.link"
            class="block text-sm leading-6 hover:underline text-gray-400"
            >{{ link.label }}</a
          >
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3">
          <h3 class="text-gray-900 uppercase text-base tracking-widest my-4">
            Nuestra Empres
          </h3>
          <a
            v-for="(link, index) in footerLinks"
            :key="`${index}-${index}`"
            :href="link.link"
            class="block text-sm leading-6 hover:underline text-gray-400"
            >{{ link.label }}</a
          >
        </div>
      </div>
    </div>

    <!-- for bottom footer section -->
    <div class="bg-gray-800 py-3 md:py-6">
      <div class="flex flex-wrap px-4 lg:mx-36 md:mx-10">
        <div class="md:flex-1">
          <p class="text-sm text-gray-300">
            © 2018 Artesiete. All rights reserved.
          </p>
        </div>
        <div class="md:flex-1">
          <p class="text-sm text-right text-gray-300">
            Operativa Bancaria realizada en España
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      footerLinks: [
        {
          link: '#',
          label: 'Comprueba Compra'
        },
        {
          link: '#',
          label: 'Acceso a la Sala'
        },
        {
          link: '#',
          label: 'Contacto Empresa'
        },
        {
          link: '#',
          label: 'Trabaja con Nosotros'
        },
        {
          link: '#',
          label: 'Política de Cookies'
        },
        {
          link: '#',
          label: 'Aviso Legal'
        }
      ]
    }
  }
}
</script>
