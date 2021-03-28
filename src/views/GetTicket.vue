<template>
  <div
    class="w-screen h-screen bg-white fixed left-0 top-0 flex justify-center items-center"
  >
    <div class="absolute w-10 top-2 right-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path
          data-name="layer1"
          fill="none"
          stroke="var(--layer1, #202020)"
          stroke-miterlimit="10"
          d="M41.999 20.002l-22 22m22 0L20 20"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="w-10/12 mx-auto ">
      <h2
        title="Choose your Cimena"
        class="text-3xl normal-case mb-10 pb-4 border-b border-black font-bold text-center tracking-widest"
      >
        - Choose your Cinema -
      </h2>

      <div class="flex flex-wrap">
        <div
          v-for="cinema in CinemaLists"
          :key="cinema.hallName"
          class="w-full lg:w-1/6 md:w-1/4 sm:w1/2 px-4 "
        >
          <a :href="cinema.link" class="block">
            <h4 class="block text-lg font-bold text-center py-2">
              {{ cinema.hallName }}
            </h4>
            <h5 class="block text-sm text-center">{{ cinema.hallLocation }}</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CinemaLists: [
        {
          link: '#',
          hallName: ' Artesiete Ecija ',
          hallLocation: ' Ecija '
        },
        {
          link: '#',
          hallName: ' Artesiete Lucena ',
          hallLocation: ' Lucena '
        },
        {
          link: '#',
          hallName: ' Artesiete Segovia ',
          hallLocation: ' Lucena '
        },
        {
          link: '#',
          hallName: ' Artesiete Segovia ',
          hallLocation: ' Lucena '
        },
        {
          link: '#',
          hallName: ' Artesiete Segovia ',
          hallLocation: ' Lucena '
        }
      ]
    }
  }
}
</script>
