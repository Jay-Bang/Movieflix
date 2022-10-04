<template>
  <div id="app">
    <div id="nav" class="text-left">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
    <router-view />
  </div>
  <div class="row">
    <template v-for="data in pushDatas" :key="data['id']">
      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            :src="posterEndpoint + data.poster_path"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ data["original_title"] }}</h5>
            <p class="card-text">
              {{ data["overview"].slice(0, 50) }}
              {{ data["overview"].length > 50 ? "......." : "?" }}
            </p>
            <p />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    // let datas = reactive([]);
    const pushDatas = reactive([]);
    const posterEndpoint = "https://image.tmdb.org/t/p/w300/";

    for (var i = 0; i < 83; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${i}?api_key=5274ef63c79e5b4919fe548a60539120`
        )
        .then((res) => {
          // console.log(JSON.stringify(res.data));
          // datas[0] = res.data;
          pushDatas.push(res.data);
        })
        .catch((error) => {
          console.log("에러 데이터 : " + error.data);
        })
        .finally(() => {
          // console.log("[MainComponent] : [axios] : [complete]");
        });
    }

    return {
      // datas,
      pushDatas,
      posterEndpoint,
    };
  },
};
</script>

<style lang="scss" scoped></style>
