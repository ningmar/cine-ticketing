<template>
  <section class="px-1">
    <app-section-title>Cartelera Artesiete</app-section-title>
    <div class="flex flex-wrap">
      <div
        v-for="movie in billboards"
        :key="movie.id"
        class="w-1/2 px-4 md:w-1/4 lg:w-1/6 sm:w-1/3"
      >
        <app-card>
          <template #image>
            <img
              class="object-cover h-auto max-w-full"
              :src="movie.image"
              :alt="movie.name"
            />
          </template>
          <template #action>
            <svg
              class="w-3 h-3 mr-2 text-white fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 513"
            >
              <path
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
            <span>Compra!</span>
          </template>
          <template #label>{{ movie.category }}</template>
          <template #title>
            <svg
              class="flex-shrink-0 inline-block w-3.5 h-3.5 mr-2 text-gray-800 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 496"
            >
              <path
                d="M248 0C111.043 0 0 111.083 0 248c0 136.997 111.043 248 248 248s248-111.003 248-248C496 111.083 384.957 0 248 0zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
              />
            </svg>
            <span class="uppercase align-middle">{{ movie.name }}</span>
          </template>
        </app-card>
      </div>
    </div>
  </section>
</template>

<script>
import AppCard from '../../components/ui/AppCard'
import AppSectionTitle from '../../components/ui/AppSectionTitle'

export default {
  name: 'HomeBillboard',
  components: {
    AppCard,
    AppSectionTitle
  },
  data() {
    return {
      billboards: [
        {
          id: 1,
          category: 'Drama Comedy',
          name: 'The Boy',
          image: 'https://artesiete.es/Posters/elchico.jpg'
        },
        {
          id: 2,
          category: 'Drama',
          name: 'The Summer We Live',
          image: 'https://artesiete.es/Posters/elveranoquevivimos.jpg'
        },
        {
          id: 3,
          category: 'Thriller',
          name: 'Up to The Sky',
          image: 'https://artesiete.es/Posters/hastaelcielo.jpg'
        },
        {
          id: 4,
          category: 'Action',
          name: 'Wonder Woman 1984',
          image: 'https://artesiete.es/Posters/wonderwoman1984.jpg'
        },
        {
          id: 5,
          category: 'Drama',
          name: 'The Girl With The Bracelet',
          image: 'https://artesiete.es/Posters/lachicadelbrazalete.jpg'
        },
        {
          id: 6,
          category: 'Drama',
          name: 'The Persian Teacher',
          image: 'https://artesiete.es/Posters/elprofesordepersa.jpg'
        },
        {
          id: 7,
          category: 'Animation',
          name: 'The Croods: A New Era',
          image: 'https://artesiete.es/Posters/loscroodslanuevaera.jpg'
        },
        {
          id: 8,
          category: 'Drama',
          name: 'The Father',
          image: 'https://artesiete.es/Posters/elpadre.jpg'
        }
      ]
    }
  }
}
</script>
