<template>
  <hr class="border border-5 border-success" />
  <div><h1>Now Playing</h1></div>
  <div class="row">
    <template v-for="(data, index) in pushDatas" :key="data['id']">
      <div class="col" v-if="index <= 15">
        <div class="card" style="width: 10rem" id="card">
          <img
            :src="posterEndpoint + data.poster_path"
            class="card-img-top"
            alt="..."
            @click="goDetail(data.id)"
          />
          <div class="card-body">
            <h5 class="card-title title">
              {{ data["title"] }}
            </h5>
            <p class="card-text date">
              {{ data["release_date"] }}
            </p>
            <p />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import router from "../router";

export default {
  setup() {
    const pushDatas = ref();

    const baseURL = "https://api.themoviedb.org/3/";
    const posterEndpoint = "https://image.tmdb.org/t/p/w300/";
    const apiKey = import.meta.env.VITE_SOME_KEY;

    const goDetail = (id) => {
      router.push("/detail/" + id);
    };

    axios
      .get(`${baseURL}movie/now_playing?api_key=${apiKey}&language=ko-Kr`)
      .then((res) => {
        pushDatas.value = res.data.results;
      })
      .catch((error) => {
        console.log("에러 데이터 : " + error.data);
      })
      .finally(() => {});

    return {
      pushDatas,
      posterEndpoint,
      goDetail,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: medium;
  color: #ffffff;
}

.date {
  font-size: small;
  color: #ffffff;
}

.card {
  background-color: rgb(20, 20, 20);
  color: #2c3e50;
}
</style>
