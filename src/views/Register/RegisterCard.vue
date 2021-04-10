<template>
  <section>
    <div class="mb-12 text-center">
      <router-link
        :to="{ name: 'register-solo-pass' }"
        class="px-4 text-xl font-extrabold leading-tight text-red-500 hover:underline"
      >
        Si ya dispones de tarjeta pero no tienes clave web, pulsa aqui!!
      </router-link>
    </div>
    <div class="flex flex-wrap pb-4 md:px-6 xl:px-0">
      <div class="w-full px-4 lg:w-2/3 xl:w-3/4">
        <form>
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

          <app-input
            label="Email"
            type="email"
            placeholder="Escriba su Email"
            :required="true"
          ></app-input>

          <app-input
            label="Confirmar Email"
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

          <app-input
            label="Nombre Completo"
            type="text"
            placeholder="Escriba su Nombre"
            :required="true"
          ></app-input>

          <app-input
            label="NIF"
            type="text"
            placeholder="Escriba su NIF"
            :required="true"
          ></app-input>

          <app-input
            label="Fecha de Nacimiento"
            type="date"
            :required="true"
          ></app-input>

          <app-input
            label="Movil"
            type="text"
            placeholder="Escriba su Numero de Telefono"
            :required="true"
          ></app-input>

          <app-input
            label="Direccion"
            type="text"
            placeholder="Escriba su Direccion"
            :required="true"
          ></app-input>

          <div class="flex flex-wrap">
            <app-input
              class="w-1/5"
              label="CP"
              type="text"
              placeholder="CP"
              :required="true"
            ></app-input>

            <app-input
              class="w-4/5 pl-8"
              label="Localidad"
              type="text"
              placeholder="Escriba su Localidad"
              :required="true"
            ></app-input>
          </div>

          <app-input
            label="Provincia"
            type="text"
            placeholder="Escriba su Provincia"
            :required="true"
          ></app-input>

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
  name: 'RegisterCard',
  components: {
    AppButton,
    AppInput,
    RegisterFeaturesList
  }
}
</script>
