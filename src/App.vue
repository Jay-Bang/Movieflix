<template>
  <div id="app">
    <div>
      <NavRouter></NavRouter>
    </div>
  </div>
</template>

<script>
import NavRouter from "./components/NavRouter.vue";

export default {
  components: {
    NavRouter,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
#app {
  background-color: rgb(20, 20, 20);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #ffffff;
  min-height: 100vh;
  z-index: 0;
}
</style>
