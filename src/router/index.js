import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/MainView.vue";
import MovieDetail from "../components/MovieDetail.vue";
import SearchView from "../components/SearchView.vue";
// import HighlightSection from "../components/HighlightSection.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/detail/:id",
    props: true,
    name: "Detail",
    component: MovieDetail,
  },
  {
    path: "/search",
    props: true,
    name: "Search",
    component: SearchView,
  },
  // {
  //   path: "/highlight",
  //   name: "highlight",
  //   component: HighlightSection,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
