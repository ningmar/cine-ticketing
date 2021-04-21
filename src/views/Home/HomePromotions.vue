<template>
  <section class="px-1 mb-12">
    <app-section-title>Promotions</app-section-title>
    <swiper
      v-if="promotions.length > 0"
      ref="swiper"
      :options="swiperOption"
      class="w-11/12 mx-auto"
      @mouseover.native="stopAutoplay"
      @mouseleave.native="startAutoplay"
    >
      <swiper-slide
        v-for="promotion in promotions"
        :key="promotion.id"
        class="px-1 sm:px-2"
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
      </swiper-slide>
      <div
        id="promotion-pagination"
        slot="pagination"
        class="swiper-pagination"
      ></div>
    </swiper>
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
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        grabCursor: true,
        slidesPerView: 1,
        breakpoints: {
          1024: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 3
          },
          500: {
            slidesPerView: 2
          }
        },
        pagination: {
          el: '#promotion-pagination',
          clickable: true,
          bulletClass: 'cine-swiper-bullet',
          bulletActiveClass: 'cine-swiper-bullet-active'
        }
      },
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
  methods: {
    startAutoplay() {
      this.$refs.swiper.$swiper.autoplay.start()
    },
    stopAutoplay() {
      this.$refs.swiper.$swiper.autoplay.stop()
    }
  }
}
</script>

<style scoped>
::v-deep .cine-swiper-bullet {
  @apply inline-block mx-1 w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-700 cursor-pointer;
}

::v-deep .cine-swiper-bullet:only-child {
  @apply hidden;
}

::v-deep .cine-swiper-bullet-active {
  @apply bg-gray-700;
}
</style>
