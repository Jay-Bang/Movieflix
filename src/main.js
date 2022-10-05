import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";
import router from "./router";
// import dotenv from "dotenv";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap";

// dotenv.config();
// console.log(VUE_APP_TMDB);

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(router).mount("#app");
