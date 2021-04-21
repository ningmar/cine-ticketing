<template>
  <section>
    <swiper v-if="carouselItems.length > 0" :options="swiperOption">
      <swiper-slide v-for="item in carouselItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
      </swiper-slide>
      <div
        id="home-carousel-prev"
        slot="button-prev"
        class="absolute z-10 hidden transform -translate-y-1/2 cursor-pointer xl:block left-10 top-1/2 focus:outline-none"
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
      </div>
      <div
        id="home-carousel-next"
        slot="button-next"
        class="absolute z-10 hidden transform -translate-y-1/2 cursor-pointer xl:block right-10 top-1/2 focus:outline-none"
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
      </div>
      <div
        id="home-carousel-pagination"
        slot="pagination"
        class="xl:hidden swiper-pagination"
      ></div>
    </swiper>
  </section>
</template>

<script>
export default {
  name: 'HomeCarousel',
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
          nextEl: '#home-carousel-next',
          prevEl: '#home-carousel-prev'
        },
        pagination: {
          el: '#home-carousel-pagination',
          clickable: true,
          bulletClass: 'cine-swiper-bullet',
          bulletActiveClass: 'cine-swiper-bullet-active'
        }
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

<style scoped>
::v-deep .cine-swiper-bullet {
  @apply inline-block mx-1 w-2 h-2 rounded-full bg-gray-200 hover:bg-gray-500 cursor-pointer;
}

::v-deep .cine-swiper-bullet:only-child {
  @apply hidden;
}

::v-deep .cine-swiper-bullet-active {
  @apply w-3 h-3 bg-gray-50 hover:bg-gray-50 top-0.5 relative;
}
</style>
