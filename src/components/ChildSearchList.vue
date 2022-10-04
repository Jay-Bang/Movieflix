<template>
  <div>
    <h1>child search List</h1>
    {{ searchkeyword }}
    {{ pushDatas }}
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import axios from "axios";

export default {
  props: ["searchkeyword"],
  setup(props) {
    const searchkeyword = ref("");
    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "5274ef63c79e5b4919fe548a60539120";
    const posterEndpoint = "https://image.tmdb.org/t/p/w300/";
    const pushDatas = ref();

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
    return { pushDatas };
  },
};
</script>

<style lang="scss" scoped></style>
