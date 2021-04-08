<template>
  <section class="px-1">
    <app-section-title>Proximos Estrenos</app-section-title>
    <swiper
      v-if="upcomings.length > 0"
      ref="swiper"
      :options="swiperOption"
      @mouseover.native="stopAutoplay"
      @mouseleave.native="startAutoplay"
    >
      <swiper-slide v-for="movie in upcomings" :key="movie.id" class="px-3">
        <app-card>
          <template #ribbon>{{ movie.release_date }}</template>
          <template #image>
            <img
              class="object-cover h-auto max-w-full"
              :src="movie.image"
              :alt="movie.name"
            />
          </template>
          <template #action>
            Más Info
          </template>
          <template #label>
            <span class="text-xs uppercase">{{ movie.name }}</span>
          </template>
        </app-card>
      </swiper-slide>
      <div
        id="upcoming-pagination"
        slot="pagination"
        class="swiper-pagination"
      ></div>
    </swiper>
  </section>
</template>

<script>
import AppCard from '@/components/ui/AppCard'
import AppSectionTitle from '@/components/ui/AppSectionTitle'

export default {
  name: 'HomeNextReleases',
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
          el: '#upcoming-pagination',
          clickable: true,
          bulletClass: 'cine-swiper-bullet',
          bulletActiveClass: 'cine-swiper-bullet-active'
        }
      },
      upcomings: [
        {
          id: 1,
          name: 'Mortal Kombat',
          image: 'https://artesiete.es/Posters/mortalkombat.jpg',
          release_date: '16/04/2021'
        },
        {
          id: 2,
          name: 'Una Joven Prometedora',
          image: 'https://artesiete.es/Posters/unajovenprometedora.jpg',
          release_date: '16/04/2021'
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
  @apply inline-block mx-1 w-2 h-2 rounded-full bg-gray-300 cursor-pointer;
}

::v-deep .cine-swiper-bullet:only-child {
  @apply hidden;
}

::v-deep .cine-swiper-bullet-active {
  @apply bg-gray-700;
}
</style>
