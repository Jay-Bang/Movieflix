<template>
  <div>
    <!-- <h1>highlight {{ pushDatas }}</h1> -->
    <div class="movie-detail">
      <div
        class="movie-detail-image"
        :style="{
          backgroundImage: `url(${backdropEndpoint + pushDatas.backdrop_path})`,
        }"
      ></div>
      <div class="movie-content d-flex">
        <div class="ml-4 w-75">
          <h1 class="movie-title">{{ pushDatas.title }}</h1>
          <div class="movie-information-wrapper mt-4 d-flex">
            <div>{{ pushDatas.release_date }}</div>
            <span class="ml-1">ㆍ</span>
            <div>{{ pushDatas.runtime }} 분</div>
            <span class="ml-1">ㆍ</span>
            <div class="ml-2 d-flex">
              <div
                class="genres"
                v-for="genre in pushDatas.genres"
                :key="genre.id"
              >
                {{ genre.name }}
              </div>
            </div>
          </div>
          <div class="movie-overview mt-3">
            {{ pushDatas.overview }}
          </div>
          <div>
            <iframe
              v-if="pushVideos"
              class="mt-5"
              :key="pushVideos.key"
              width="640"
              height="360"
              :src="youtubeEndpoint + pushVideos.key"
              frameborder="0"
              allow=" fullscreen "
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const pushDatas = ref([]); //{ test: "test value" });
    const pushVideos = ref();

    const baseURL = "https://api.themoviedb.org/3/";
    const backdropEndpoint =
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
    const posterEndpoint = "https://image.tmdb.org/t/p/w300/";
    const youtubeEndpoint = "https://www.youtube.com/embed/";
    const apiKey = import.meta.env.VITE_SOME_KEY;

    axios
      .get(`${baseURL}movie/634649?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        pushDatas.value = res.data;
        //console.log(typeof res.data);
        // console.log(res.data.overview);
        // pushDatas.value.push(res.data.title);
        // pushDatas.value.push(res.data.release_date);
        // pushDatas.value.push(res.data.genres);
        // pushDatas.value.push(res.data.runtime);
        // pushDatas.value.push(res.data.backdrop_path);
        // pushDatas.value.push(res.data.overview);
        //console.log(typeof pushDatas.value.overview);
      })
      .catch((error) => {
        console.log("에러 데이터 : " + error.data);
      })
      .finally(() => {});

    axios
      .get(`${baseURL}movie/634649/videos?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        pushVideos.value = res.data.results[0];
      })
      .catch((error) => {
        console.log("에러 데이터 : " + error.data);
      })
      .finally(() => {});

    return {
      pushDatas,
      pushVideos,
      backdropEndpoint,
      youtubeEndpoint,
      posterEndpoint,
    };
  },
};
</script>

<style scoped>
.movie-detail {
  position: relative;
  padding: 20px 20px;
}
.movie-detail-image {
  background-size: cover;
  height: 65vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 50%;
}
.movie-content {
  position: relative;
  z-index: 999;
  color: #ffffffdd;
}
.movie-title {
  margin-left: 10px;
}
.movie-information-wrapper {
  font-size: 13px;
}
.movie-overview {
  max-width: 100%;
  font-size: 14px;
  color: #cacacadd;
}
</style>
