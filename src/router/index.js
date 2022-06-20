import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../views/MovieList.vue'
// import MovieDetail from '../components/MovieDetail.txt'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: "/details",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieDetail.vue"),
  },
  // {
  //   path: "/favourite",
  //   name: "LikedMovie",
  //   component:LikedMovie
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
