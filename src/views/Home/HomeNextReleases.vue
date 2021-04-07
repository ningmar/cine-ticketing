<template>
  <section class="px-1">
    <app-section-title>Proximos Estrenos</app-section-title>
    <div v-if="upcomings.length > 0" class="slide-container">
      <div v-for="movie in upcomings" :key="movie.id" class="px-3 slide">
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
      </div>
    </div>
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
  }
}
</script>
