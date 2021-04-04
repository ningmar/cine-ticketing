<template>
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
</template>

<script>
export default {
  name: 'HomeCarousel',
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
      ]
    }
  }
}
</script>
