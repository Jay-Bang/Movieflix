<template>
  <div>
    <div>
      <HighlightSection></HighlightSection>
      <NowMovie></NowMovie>
      <PopularMovieVue></PopularMovieVue>
      <UpcomingMovie></UpcomingMovie>
    </div>
  </div>
</template>

<script>
import PopularMovieVue from "./PopularMovie.vue";
import UpcomingMovie from "./UpcomingMovie.vue";
import NowMovie from "./NowMovie.vue";
import HighlightSection from "./HighlightSection.vue";

export default {
  components: {
    PopularMovieVue,
    UpcomingMovie,
    NowMovie,
    HighlightSection,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
