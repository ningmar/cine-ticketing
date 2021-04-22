<template>
  <div class="max-w-5xl mx-auto">
    <div class="relative bg-white bg-clip-padding">
      <button
        class="absolute w-12 h-12 bg-gray-700 -top-1 -right-1 focus:outline-none"
      >
        <svg
          class="w-full h-full text-white stroke-current stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M41.999 20.002l-22 22m22 0L20 20" />
        </svg>
      </button>
      <app-ribbon
        class="top-8"
        bg-color="#9a6ee2"
        bt-color="#6227c3"
        font-size="0.8rem"
      >
        Login
      </app-ribbon>
      <div class="py-4">
        <div class="flex flex-col items-center md:flex-row md:py-2">
          <div class="flex-1 px-4">
            <div class="px-12 pb-4 text-center md:text-left pt-14">
              <form>
                <app-input
                  label="Email"
                  type="email"
                  placeholder="Escriba su Email"
                  :required="true"
                ></app-input>

                <app-input
                  label="Contraseña"
                  type="password"
                  placeholder="Escriba su contraseña"
                  :required="true"
                ></app-input>

                <div class="mb-2">
                  <app-button
                    style="font-size: 0.6875rem"
                    class="py-2.5 border border-gray-700 hover:bg-gray-700 hover:text-gray-50 focus:ring-2 focus:ring-gray-400"
                  >
                    Enviar
                  </app-button>
                  <span class="ml-3 text-sm">
                    Has olvidado tu contraseña? pulsa
                    <router-link class="text-purple-500" to="/"
                      >aquí</router-link
                    >
                  </span>
                </div>
              </form>

              <div class="mt-10 text-sm">
                <p>
                  Si dispone de tarjeta pero no de clave web, vaya a la seccion
                  Darse de Alta y clique la opción Alta de usuario con tarjeta
                </p>
                <br />
                <p>
                  Logate para aprovechar los mejores precios y todas las
                  ventajas de la Tarjeta Artesiete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'
import AppRibbon from '@/components/ui/AppRibbon'

export default {
  components: {
    AppButton,
    AppInput,
    AppRibbon
  }
}
</script>
