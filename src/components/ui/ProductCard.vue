<template>
  <div class="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12 px-4">
    <div class="mb-8">
      <div class="relative border-b-2 border-gray-600">
        <img class="max-w-full h-auto" :src="image" />
      </div>
      <div class="py-2">
        <p class="mb-1 text-xs text-gray-400">{{ category }}</p>
        <div class="mb-1 flex">
          <span class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
              />
            </svg>
          </span>
          <span class="font-bold tracking-widest text-sm uppercase">{{
            name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    category: String,
    name: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
