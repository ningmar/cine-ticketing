<template>
  <div class="home">
    <section>
      <vue-glide
        v-if="carouselItems.length > 0"
        :options="glideOptions"
        :bullet="true"
      >
        <vue-glide-slide v-for="item in carouselItems" :key="item.id">
          <img :src="item.image" :alt="item.name" />
        </vue-glide-slide>
        <template slot="control">
          <button
            class="absolute hidden transform -translate-y-1/2 xl:block left-10 top-1/2 focus:outline-none"
            data-glide-dir="<"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 477.175 477.175"
              class="w-12 h-12"
            >
              <path
                d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"
                fill="#fff"
              />
            </svg>
          </button>
          <button
            class="absolute hidden transform -translate-y-1/2 xl:block right-10 top-1/2 focus:outline-none"
            data-glide-dir=">"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 477.175 477.175"
              class="w-12 h-12"
            >
              <path
                d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"
                fill="#fff"
              />
            </svg>
          </button>
        </template>
      </vue-glide>
    </section>
    <br />
    <app-section-title>Cartelera Artesiete</app-section-title>
    <div class="flex flex-wrap max-w-6xl mx-auto">
      <app-card
        v-for="movie in featuredMovies"
        :key="movie.id"
        :category="movie.category"
        :name="movie.name"
        :image="movie.image"
      ></app-card>
    </div>
  </div>
</template>

<script>
import AppCard from '../components/AppCard'
import AppSectionTitle from '../components/ui/AppSectionTitle'
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
  name: 'Home',
  components: {
    AppCard,
    AppSectionTitle,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      glideOptions: {
        autoplay: 4000,
        animationDuration: 500,
        animationTimingFunc: 'ease-in-out',
        bound: false,
        gap: 0,
        perView: 1,
        type: 'carousel',
        dragThreshold: 10
      },
      carouselItems: [
        {
          id: 1,
          name: 'GODZILLA VS. KONG',
          image: 'https://gestor.artesiete.es/images/slider/1605b4773ab9e0.png'
        },
        {
          id: 2,
          name: 'idk',
          image: 'https://gestor.artesiete.es/images/slider/160630d07a8f7c.png'
        },
        {
          id: 3,
          name: 'Monster Hunter',
          image: 'https://gestor.artesiete.es/images/slider/1605203c013a64.png'
        },
        {
          id: 4,
          name: 'Tom and Jerry',
          image: 'https://gestor.artesiete.es/images/slider/1605b46c38206c.png'
        }
      ],
      featuredMovies: [
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

<style scoped>
::v-deep .glide__slide--active {
  z-index: 1;
}

::v-deep .glide__bullets {
  @apply xl:hidden;

  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 50%;
  list-style: none;
  transform: translateX(-50%);
}

::v-deep .glide__bullet {
  background-color: #dee2e6;
  width: 8px;
  height: 8px;
  backface-visibility: visible;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 5px;
}

::v-deep .glide__bullet:focus {
  outline: none;
}

::v-deep .glide__bullet:hover,
.glide__bullet:focus {
  background-color: #343a40;
}

::v-deep .glide__bullet--active,
::v-deep .glide__bullet--active:hover {
  width: 12px;
  height: 12px;
  top: 2px;
  position: relative;
  background-color: #fff;
}

::v-deep .glide--swipeable {
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

::v-deep .glide--dragging {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
</style>
