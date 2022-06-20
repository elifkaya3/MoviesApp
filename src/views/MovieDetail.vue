<template>
  <div class="detail-container">
    <v-card :loading="loading" class="detail-card">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="selectedMovie.poster_path"></v-img>

      <v-card-title>{{ selectedMovie.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="selectedMovie.vote_average / 2"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ selectedMovie.vote_average }}
          </div>
          <div class="grey--text ms-4">
            Kullanılan oy sayısı: {{ selectedMovie.vote_count }}
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          •{{ selectedMovie.original_title }}
        </div>

        <div>
          {{ selectedMovie.overview }}
        </div>

         <div>
         Popularity: {{ selectedMovie.popularity }}
        </div>
        <div>
         Release Date: {{ selectedMovie.release_date }}
        </div>
      </v-card-text>

      

      <v-card-actions style="margin-left: 40px">
        <div><v-btn icon @click="goBack()">
          <v-icon>mdi-arrow-left-thin</v-icon>Geri Dön
        </v-btn>
        </div>
        <div>
          <v-btn icon @click="goFavorite()"> Favorilerim </v-btn>
          </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data: () => ({favorite: null,}),
  name: "MovieDetail",

  computed: {
    selectedMovie() {
      return this.$route.params;
    },
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "MovieList",
      });
    },
    goFavorite() {
      this.favorite = this.$store.state.movie.cart;
      this.$router.push({
        name: "LikedMovie",
        favorite: this.favorite,
      });
    },
    ...mapActions({
      addMovieToCart: "movie/addMovieToCart",
    }),
    addToCart() {
      this.addMovieToCart(this.selectedMovie);
    },
  }
};
</script>

<style lang="scss" scoped>
.detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .detail-card {
    width: 70%;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>