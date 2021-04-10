<template>
  <section>
    <div class="mb-12 text-center">
      <router-link
        :to="{ name: 'register' }"
        class="px-4 text-xl font-extrabold leading-tight text-red-500 hover:underline"
      >
        Si aun no dispones de tarjeta Artesiete, pulsa aqui!! para obtener la
        tuya
      </router-link>
    </div>
    <div class="flex flex-wrap pb-4 md:px-6 xl:px-0">
      <div class="w-full px-4 lg:w-2/3 xl:w-3/4">
        <form>
          <app-input
            label="Numero de su Tarjeta Artesiete"
            type="text"
            placeholder="Escriba el numero de su Tarjeta"
            :required="true"
          ></app-input>

          <app-input
            label="Email"
            type="email"
            placeholder="Escriba su Email"
            :required="true"
          ></app-input>

          <div class="flex flex-wrap">
            <app-input
              class="w-full sm:w-1/2"
              label="Contraseña"
              type="password"
              :required="true"
            ></app-input>

            <app-input
              class="w-full sm:w-1/2 sm:pl-8"
              label="Repetir Contraseña"
              type="password"
              :required="true"
            ></app-input>
          </div>

          <div class="flex items-center mb-5">
            <input
              class="text-sm border border-gray-300 py-2.5 px-3"
              type="checkbox"
            />
            <span class="ml-2 text-sm">
              He leido y acepto expresamente la política de privacidad y el
              tratamiento de mis datos.
            </span>
          </div>

          <div class="mb-2">
            <app-button>Enviar Datos</app-button>
          </div>
        </form>
      </div>
      <div class="w-full px-4 mt-10 lg:w-1/3 xl:w-1/4 lg:mt-0">
        <register-features-list></register-features-list>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'
import RegisterFeaturesList from './RegisterFeaturesList'

export default {
  name: 'RegisterPassword',
  components: {
    AppButton,
    AppInput,
    RegisterFeaturesList
  }
}
</script>
