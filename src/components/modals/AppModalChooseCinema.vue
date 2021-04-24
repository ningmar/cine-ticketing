<template>
  <app-modal name="choose-cinema" :fullscreen="true">
    <template #content="slotProps">
      <div
        v-scroll-lock="slotProps.isOpen"
        class="flex items-center justify-center h-screen"
      >
        <div class="w-11/12">
          <h3
            class="pb-2 mb-10 text-3xl font-bold leading-none text-center border-b border-black"
          >
            - Elige tu Cine -
          </h3>
          <div class="flex flex-wrap">
            <div
              v-for="cinema in cinemas"
              :key="cinema.id"
              class="w-1/2 h-24 px-2 md:px-4 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              <div class="text-center cursor-pointer">
                <h4 class="mb-2 text-lg font-bold leading-none">
                  {{ cinema.name }}
                </h4>
                <h5 class="mb-2 text-sm leading-none">{{ cinema.location }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/modals/AppModal'

export default {
  name: 'AppModalChooseCinema',
  components: {
    AppModal
  },
  data() {
    return {
      cinemas: [
        {
          id: 1,
          name: 'Artesiete Alcala Norte',
          location: 'Madrid'
        },
        {
          id: 2,
          name: 'Artesiete Alfares',
          location: 'Talavera de la Reina'
        },
        {
          id: 3,
          name: 'Artesiete Fan',
          location: 'Palma'
        },
        {
          id: 4,
          name: 'Artesiete La Torre',
          location: 'Zaragoza'
        },
        {
          id: 5,
          name: 'Artesiete Las Terrazas',
          location: 'Telde'
        },
        {
          id: 6,
          name: 'Artesiete Holea',
          location: 'Huelva'
        },
        {
          id: 7,
          name: 'Artesiete Ecija',
          location: 'Ecija'
        },
        {
          id: 8,
          name: 'Artesiete Lucena',
          location: 'Lucena'
        }
      ]
    }
  }
}
</script>
