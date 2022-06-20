import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/MovieList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/detay",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieDetail.vue"),
  },
  {
    path: "/favorilerim",
    name: "LikedMovie",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LikedMovie.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;