<template>
  <div class="home">
    <section-title title="cartelera artesiete"></section-title>
    <div class="max-w-6xl mx-auto flex flex-wrap">
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
import SectionTitle from '../components/SectionTitle'

export default {
  name: 'Home',
  components: {
    AppCard,
    SectionTitle
  },
  data() {
    return {
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
