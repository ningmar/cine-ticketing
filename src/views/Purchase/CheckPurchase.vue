<template>
  <section class="max-w-6xl mx-auto">
    <div class="px-4 mb-12 text-center">
      <ul class="py-8 text-xs">
        <li class="inline px-1">Comprueba</li>
        <li class="inline px-1">/</li>
        <li class="inline px-1 text-gray-500">Artesiete</li>
      </ul>
      <h3 class="text-xl font-light text-gray-400">
        Comprueba tu Compra
      </h3>
    </div>
    <div>
      <h3
        style="font-size: 1.35rem"
        class="px-4 mb-2 font-bold leading-tight text-center"
      >
        Utilice este formulario para comprobar el estado de su compra y/o
        obtener una copia de su comprobante.
      </h3>
      <div class="flex flex-wrap py-4 md:px-6 xl:px-0">
        <div class="w-full px-4 md:w-3/5">
          <form>
            <app-input
              label="Fecha de compra"
              :required="true"
              type="date"
            ></app-input>

            <div class="mb-4">
              <label
                class="block mb-2 text-xs tracking-widest text-gray-400 uppercase"
                >Elige tu cine *</label
              >
              <select
                class="w-full px-2.5 py-2.5 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-500 focus:outline-none"
              >
                <option value="Cines Artesiete">Cines Artesiete</option>
                <option value="Artesiete Lucena">Artesiete Lucena</option>
                <option value="Artesiete Alhsur">Artesiete Alhsur</option>
                <option value="Artesiete Holea">Artesiete Holea</option>
                <option value="Artesiete Fan">Artesiete Fan</option>
                <option value="Artesiete Las Terrazas"
                  >Artesiete Las Terrazas</option
                >
                <option value="Artesiete Alcala">Artesiete Alcala</option>
                <option value="Artesiete Segovia">Artesiete Segovia</option>
                <option value="Artesiete Ecija">Artesiete Ecija</option>
                <option value="Artesiete Los alfares"
                  >Artesiete Los alfares</option
                >
                <option value="Artesiete Caudalia">Artesiete Caudalia</option>
                <option value="Artesiete Nalon">Artesiete Nalon</option>
              </select>
            </div>

            <div class="flex flex-wrap items-center justify-between mb-4">
              <p class="text-sm font-bold">
                Otros Datos, completa al menos uno de los tres.
              </p>
              <p class="text-sm font-medium text-center text-red-500">
                Debe introducir uno de los 3 valores
              </p>
            </div>

            <app-input
              label="Tu Email"
              type="email"
              placeholder="Escribe tu Email"
            ></app-input>

            <app-input
              label="Tu Referencia"
              placeholder="Escribe la Referencia"
            ></app-input>

            <app-input
              label="Cod Barras"
              placeholder="Escribe el codigo de barras"
            ></app-input>

            <div class="flex items-center mb-5">
              <input
                class="text-sm border border-gray-300 py-2.5 px-3"
                type="checkbox"
              />
              <span class="ml-2 text-sm">
                He leido y acepto expresamente la política de privacidad y el
                tratamiento de mis datos. Lealas
                <a href="#" class="text-indigo-400 hover:underline">AQUI</a>
              </span>
            </div>

            <div class="mb-2">
              <app-button>Comprobar</app-button>
            </div>
          </form>
        </div>
        <div class="w-full p-4 mt-10 md:w-2/5 md:mt-0">
          <p class="mb-4 text-sm text-gray-400">
            Utiliza este formulario para consultar su compra y obtener una copia
            de su comprobante.
          </p>
          <p class="mb-4 text-sm text-gray-400">
            Si tiene alguna consulta sobre su compra o el proceso de compra,
            utilice el formulario de contacto.
          </p>
          <ul class="mb-4">
            <li class="inline-block mr-3">
              <a
                href="https://twitter.com/cinesartesiete"
                target="_blank"
                title="Twitter"
              >
                <svg
                  class="w-3.5 h-3.5 text-purple-500 fill-current hover:text-purple-700"
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
            <li class="inline-block mr-3">
              <a
                href="https://www.facebook.com/cinesartesiete/"
                target="_blank"
                title="Facebook"
              >
                <svg
                  class="w-3 h-3 text-purple-500 fill-current hover:text-purple-700"
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
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'

export default {
  name: 'CheckPurchase',
  components: {
    AppButton,
    AppInput
  }
}
</script>
