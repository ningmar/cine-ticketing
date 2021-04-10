<template>
  <div>
    <register-carousel v-if="$route.path === '/registro'"></register-carousel>
    <div class="max-w-6xl mx-auto">
      <section class="px-4 mb-12 text-center">
        <ul class="py-8 text-xs">
          <li class="inline px-1">Registro</li>
          <li class="inline px-1">/</li>
          <li class="inline px-1 text-gray-500">Tarjeta Artesiete</li>
        </ul>
        <h1
          class="mb-8 text-3xl font-bold tracking-widest uppercase lg:text-6xl"
        >
          Registro
        </h1>
      </section>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RegisterCarousel from './RegisterCarousel'

export default {
  name: 'Register',
  components: {
    RegisterCarousel
  }
}
</script>
