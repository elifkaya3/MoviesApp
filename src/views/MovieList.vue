<template>
  <div class="grid">
    <v-card
      :loading="loading"
      class="card mx-8"
      width="300"
      height="700"
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
        height="450"
        src="http://www.perasinema.com/wp-content/uploads/2022/03/fb3.jpeg"
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

       
      </v-card-text>

      <v-card-actions style="margin-left: 20px">
        <v-btn icon @click="goDetail(movie)">
          <v-icon>mdi-movie-open</v-icon>DETAY
        </v-btn>

     
        <v-spacer></v-spacer>

        <v-btn icon @click="addToCart()">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
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
    addToCart(){
      this.$store.dispatch('addMovieToCart',{
        movie:this.movie
      });
    }
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