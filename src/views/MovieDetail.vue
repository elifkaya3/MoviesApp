<template>
  <div class="grid">
    <v-card
      :loading="loading"
      class="card"
      v-for="(movie, index) in getMovieList.results"
      :key="index"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ movie.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="movie.vote_average / 2"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ movie.vote_average }}
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">•{{ movie.original_title }}</div>

        <div>
          {{ movie.overview.slice(0, 150) + "..." }}
        </div>
      </v-card-text>

      <v-card-actions style="margin-left: 20px">
        <v-btn icon @click="goDetail(movie)">
          <v-icon>mdi-movie-open</v-icon>DETAY
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    loading: false,
    liked: 1,
  }),
  name: "MovieList",
  mounted() {
    this.getMovie();
  },
  methods: {
    ...mapActions({
      getMovie: "movie/getMovies",
    }),
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    goDetail(movie) {
      this.$router.push({
        name: "MovieDetail",
        params: movie,
      });
    },
  },
  computed: {
    ...mapGetters({
      getMovieList: "movie/getMovieList",
    }),
  },
};
</script>
<style lang="scss">
.grid {
  display: grid;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 0.1fr);
  .card {
    height: 600px;
    width: 420px;
  }
}
</style>