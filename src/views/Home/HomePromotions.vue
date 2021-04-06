<template>
  <section class="px-1 mb-12">
    <app-section-title>Promotions</app-section-title>
    <vue-glide
      v-if="promotions.length > 0"
      ref="promotions"
      v-model="activeIndex"
      class="w-11/12 mx-auto"
      :options="glideOptions"
      @glide:resize="onResize"
    >
      <vue-glide-slide
        v-for="promotion in promotions"
        :key="promotion.id"
        class="sm:px-2"
      >
        <app-card>
          <template #image>
            <img
              class="object-cover h-auto max-w-full"
              :src="promotion.image"
              :alt="promotion.description"
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
            <span>Más</span>
          </template>
          <template #label>{{ promotion.description }}</template>
        </app-card>
      </vue-glide-slide>
    </vue-glide>
  </section>
</template>

<script>
import AppCard from '../../components/ui/AppCard'
import AppSectionTitle from '../../components/ui/AppSectionTitle'

export default {
  name: 'HomePromotions',
  components: {
    AppCard,
    AppSectionTitle
  },
  data() {
    return {
      activeIndex: 0,
      promotions: [
        {
          id: 1,
          description:
            '1. ¡Disfruta del día del espectador todos los miércoles en Artesiete!',
          image: 'https://gestor.artesiete.es/images/promo/15f5b3d385dffd.jpg'
        },
        {
          id: 2,
          description:
            '2. ¡Disfruta del día del espectador todos los miércoles en Artesiete!',
          image: 'https://gestor.artesiete.es/images/promo/15f5b3d385dffd.jpg'
        },
        {
          id: 3,
          description:
            '3. ¡Disfruta del día del espectador todos los miércoles en Artesiete!',
          image: 'https://gestor.artesiete.es/images/promo/15f5b3d385dffd.jpg'
        },
        {
          id: 4,
          description:
            '4. ¡Disfruta del día del espectador todos los miércoles en Artesiete!',
          image: 'https://gestor.artesiete.es/images/promo/15f5b3d385dffd.jpg'
        },
        {
          id: 5,
          description:
            '5. ¡Disfruta del día del espectador todos los miércoles en Artesiete!',
          image: 'https://gestor.artesiete.es/images/promo/15f5b3d385dffd.jpg'
        },
        {
          id: 6,
          description:
            '6. ¡Disfruta del día del espectador todos los miércoles en Artesiete!',
          image: 'https://gestor.artesiete.es/images/promo/15f5b3d385dffd.jpg'
        }
      ]
    }
  },
  computed: {
    glideOptions() {
      return {
        autoplay: this.promotions.length > 5 ? 4000 : false,
        gap: 0,
        perView: 5,
        bound: true,
        rewind: false,
        animationDuration: 500,
        breakpoints: {
          640: {
            perView: 1,
            autoplay: this.promotions.length > 1 ? 4000 : false
          },
          768: {
            perView: 2,
            autoplay: this.promotions.length > 2 ? 4000 : false
          },
          1024: {
            perView: 3,
            autoplay: this.promotions.length > 3 ? 4000 : false
          }
        }
      }
    }
  },
  methods: {
    onResize() {
      this.$refs.promotions.glide.pause()
      this.$refs.promotions.glide.go('<<')
      this.$refs.promotions.glide.play()
    }
  }
}
</script>

<style scoped>
::v-deep .glide__bullets {
  bottom: 0;
}

::v-deep .glide__bullet.glide__bullet--active {
  width: 8px;
  height: 8px;
  top: 0;

  @apply bg-gray-600;
}
</style>
