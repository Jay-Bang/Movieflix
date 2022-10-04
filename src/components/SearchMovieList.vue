<template>
  <hr class="border border-5 border-success" />
  <div><h1>Your search</h1></div>
  <div class="row">
    <template v-for="data in pushDatas" :key="data['searchkeyword']">
      <div class="col">
        <div class="card" style="width: 10rem">
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
import { ref, watch } from "vue";
import axios from "axios";
import router from "../router";

export default {
  props: ["searchkeyword"],
  setup(props) {
    const pushDatas = ref();
    const searchkeyword = ref("");

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "5274ef63c79e5b4919fe548a60539120";
    const posterEndpoint = "https://image.tmdb.org/t/p/w300/";

    const goDetail = (id) => {
      router.push("/detail/" + id);
    };

    watch(
      () => props.searchkeyword,
      (newVal, oldVal) => {
        searchkeyword.value = newVal;

        axios
          .get(
            `${baseURL}search/movie?api_key=${apiKey}&language=ko-Kr&query=${searchkeyword.value}&page=1&include_adult=false`
          )
          .then((res) => {
            pushDatas.value = res.data.results;
            console.log(res.data);
          })
          .catch((error) => {
            console.log("에러 데이터 : " + error.data);
          })
          .finally(() => {});
      }
    );

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
