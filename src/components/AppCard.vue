<template>
  <div class="w-6/12 px-4 lg:w-2/12 md:w-3/12 sm:w-4/12">
    <div class="mb-8">
      <div class="border-b-2 border-gray-600">
        <img class="h-auto max-w-full" :src="image" />
      </div>
      <div class="py-2">
        <p class="mb-1 text-xs text-gray-400">{{ category }}</p>
        <div class="flex mb-1">
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
          <span class="text-sm font-bold tracking-widest uppercase">{{
            name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    category: String,
    name: String,
    image: String
  }
}
</script>
