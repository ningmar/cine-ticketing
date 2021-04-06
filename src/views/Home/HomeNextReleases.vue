<template>
  <section class="px-1">
    <app-section-title>Proximos Estrenos</app-section-title>
    <vue-glide
      v-if="upcomings.length > 0"
      ref="upcomings"
      v-model="activeIndex"
      :options="glideOptions"
      @glide:resize="onResize"
    >
      <vue-glide-slide v-for="movie in upcomings" :key="movie.id" class="px-3">
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
      </vue-glide-slide>
    </vue-glide>
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
      activeIndex: 0,
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
  computed: {
    glideOptions() {
      return {
        autoplay: this.upcomings.length > 5 ? 4000 : false,
        gap: 0,
        perView: 5,
        bound: true,
        rewind: false,
        animationDuration: 500,
        breakpoints: {
          640: {
            perView: 1,
            autoplay: this.upcomings.length > 1 ? 4000 : false
          },
          768: {
            perView: 2,
            autoplay: this.upcomings.length > 2 ? 4000 : false
          },
          1024: {
            perView: 3,
            autoplay: this.upcomings.length > 3 ? 4000 : false
          }
        }
      }
    }
  },
  methods: {
    onResize() {
      this.$refs.upcomings.glide.pause()
      this.$refs.upcomings.glide.go('<<')
      this.$refs.upcomings.glide.play()
    }
  }
}
</script>
