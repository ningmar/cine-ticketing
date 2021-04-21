<template>
  <section>
    <swiper v-if="carouselItems.length > 0" :options="swiperOption">
      <swiper-slide v-for="item in carouselItems" :key="item.id">
        <img :src="item.image" />
      </swiper-slide>
      <div
        id="register-carousel-prev"
        slot="button-prev"
        class="absolute z-10 hidden transform -translate-y-1/2 cursor-pointer xl:block left-10 top-1/2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 477.175 477.175"
          class="w-12 h-12 text-gray-900 fill-current"
        >
          <path
            d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"
          />
        </svg>
      </div>
      <div
        id="register-carousel-next"
        slot="button-next"
        class="absolute z-10 hidden transform -translate-y-1/2 cursor-pointer xl:block right-10 top-1/2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 477.175 477.175"
          class="w-12 h-12 text-gray-900 fill-current"
        >
          <path
            d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"
          />
        </svg>
      </div>
      <div
        id="register-carousel-pagination"
        slot="pagination"
        class="xl:hidden swiper-pagination"
      ></div>
    </swiper>
  </section>
</template>

<script>
export default {
  name: 'RegisterCarousel',
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        speed: 600,
        navigation: {
          nextEl: '#register-carousel-next',
          prevEl: '#register-carousel-prev'
        },
        pagination: {
          el: '#register-carousel-pagination',
          clickable: true,
          bulletClass: 'cine-swiper-bullet',
          bulletActiveClass: 'cine-swiper-bullet-active'
        }
      },
      carouselItems: [
        {
          id: 1,
          image: 'https://artesiete.es/imagenes/Tarjeta-Artesiete-2.png'
        },
        {
          id: 2,
          image: 'https://artesiete.es/imagenes/Tarjeta-Artesiete-Taquilla.png'
        },
        {
          id: 3,
          image: 'https://artesiete.es/imagenes/Tarjeta-Artesiete-Virtual.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
::v-deep .cine-swiper-bullet {
  @apply inline-block mx-1 w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700 cursor-pointer;
}

::v-deep .cine-swiper-bullet:only-child {
  @apply hidden;
}

::v-deep .cine-swiper-bullet-active {
  @apply w-3 h-3 bg-gray-800 hover:bg-gray-800 top-0.5 relative;
}
</style>
