<template>
  <div class="movie-detail">
    <div
      class="movie-detail-image"
      :style="{
        backgroundImage: `url(${backdropEndpoint + pushDatas.backdrop_path})`,
      }"
    ></div>
    <div class="movie-content d-flex">
      <div style="">
        <img
          :src="posterEndpoint + pushDatas.poster_path"
          class="mt-2"
          style="height: 60vh"
          alt="..."
        />
      </div>
      <div class="ml-4 w-75 bgbox jb">
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
        <h3>Casts</h3>
        <div
          v-for="(credit, index) in pushCredits"
          :key="credit['id']"
          class="actorImage"
        >
          <div v-if="index <= 4">
            <div>
              <div class="card">
                <img :src="profileEndpoint + credit.profile_path" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title">
                    {{ credit["original_name"] }}
                  </h5>
                  <p class="card-text date">
                    {{ credit["character"] }}
                  </p>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
// import dotenv from "dotenv";

export default {
  props: ["id"],
  setup(props) {
    const pushDatas = ref([]);
    const pushCredits = ref();
    const pushVideos = ref();

    const baseURL = "https://api.themoviedb.org/3/";
    const backdropEndpoint =
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
    const posterEndpoint = "https://image.tmdb.org/t/p/w300/";
    const profileEndpoint = "https://image.tmdb.org/t/p/w276_and_h350_face/";
    const youtubeEndpoint = "https://www.youtube.com/embed/";
    const apiKey = import.meta.env.VITE_SOME_KEY;

    axios
      .get(`${baseURL}movie/${props.id}?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        pushDatas.value = res.data;
      })
      .catch((error) => {
        console.log("에러 데이터 : " + error.data);
      })
      .finally(() => {});

    axios
      .get(
        `${baseURL}movie/${props.id}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((res) => {
        pushCredits.value = res.data.cast;
      })
      .catch((error) => {
        console.log("에러 데이터 : " + error.data);
      })
      .finally(() => {});

    axios
      .get(
        `${baseURL}movie/${props.id}/videos?api_key=${apiKey}&language=en-US`
      )
      .then((res) => {
        pushVideos.value = res.data.results[0];
      })
      .catch((error) => {
        console.log("에러 데이터 : " + error.data);
      })
      .finally(() => {});

    return {
      pushDatas,
      pushCredits,
      pushVideos,
      backdropEndpoint,
      posterEndpoint,
      profileEndpoint,
      youtubeEndpoint,
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
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.movie-content {
  position: relative;
  z-index: 999;
  color: #000000dd;
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
  color: #686868dd;
}

.bgbox {
  background-color: rgb(255, 255, 255);
  padding: 2em;
  opacity: 85%;
  margin-left: 30px;
  z-index: 1;
}

.jb {
  border-radius: 2%;
}
.li {
  width: 200px;
  height: 100px;
  display: inline-block;
  background: #ddd;
}

.actorImage {
  display: inline-block;
  width: 16%;
  margin-right: 40px;
  font-size: small;
}

.highlight {
  opacity: 100%;
}
</style>
