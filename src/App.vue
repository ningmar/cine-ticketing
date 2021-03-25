<template>
  <div id="app">
    <div class="container mx-auto">
      <nav-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar";


export default {
  components: { NavBar }
};
</script>
<style></style>
