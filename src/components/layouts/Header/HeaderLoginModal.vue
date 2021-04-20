<template>
  <app-modal class="px-8 pt-20 pb-8 md:pt-28" @close="close">
    <template #ribbon>Login</template>
    <template #content>
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
              <router-link class="text-purple-500" to="/">aquí</router-link>
            </span>
          </div>
        </form>

        <div class="mt-10 text-sm">
          <p>
            Si dispone de tarjeta pero no de clave web, vaya a la seccion Darse
            de Alta y clique la opción Alta de usuario con tarjeta
          </p>
          <br />
          <p>
            Logate para aprovechar los mejores precios y todas las ventajas de
            la Tarjeta Artesiete
          </p>
        </div>
      </div>
    </template>
  </app-modal>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'
import AppModal from '@/components/ui/AppModal'

export default {
  name: 'HeaderLoginModal',
  components: {
    AppButton,
    AppInput,
    AppModal
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
