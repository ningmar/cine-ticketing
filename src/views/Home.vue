<template>
  <div class="home">
    <products></products>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import Products from "@/components/layouts/Products.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Products,
  },
};
</script>
