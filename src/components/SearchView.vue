<template>
  <div>
    <!-- <hr class="border border-5 border-primary" />
    <div><h1>Search Here</h1></div> -->
    <div>
      <SearchMovie @event1="event2"></SearchMovie>
      <SearchMovieList :searchkeyword="msg"></SearchMovieList>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchMovie from "./SearchMovie.vue";
import SearchMovieList from "./SearchMovieList.vue";

export default {
  components: {
    SearchMovie,
    SearchMovieList,
  },
  setup() {
    const msg = ref("");
    const event2 = (a) => {
      msg.value = a.value;
    };
    return { event2, msg };
  },
};
</script>

<style lang="scss" scoped></style>
