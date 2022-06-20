<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    :elevation="hover ? 16:2" :class="{'on-hover' : hover}"
  >
      <router-link :to="`/movie/${movie.id}`">{{movie.id}}

    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="450"
      width="300"
      src="movie.poster_path"
    ></v-img>

    <v-card-title>{{movie.original_title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
           <v-col cols="12" sm="2">
                <v-rating
                  :value="movie.vote_average / 2"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                >

                 </v-rating>

             </v-col>

        <div class="grey--text ms-4">
          {{movie.vote_average}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{movie.release_date}}
      </div>  <div class="my-4 text-subtitle-1">
      {{movie.overview}}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      //<v-chip-group
      //  v-model="liked"
     //   active-class="deep-purple accent-4 white--text"
     //   column
     // >
       // <v-chip>Kalp ikonu gelecek buton gelecek</v-chip>

      
      </v-chip-group>
      <div class="my-4 subtitle-2">
              <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                  {{genreTypeName(genre, index)}}
              </span>
          </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="./components/MovieDetails"
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions,mapGetters} from "vuex"

  export default {
    data: () => ({
      loading: false,
      liked: 1,
    }),
    name:"MovieList",
    mounted(){
      this.getMovie()
    },
    methods: {
      ...mapActions({
       getMovie:"movie/getMovies "
      }),
    reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    computed:{
       ...mapGetters({
      getMovieDetail:"movie/getMovieDetail"
      })
    },
    components:{MovieDetails}
  }
</script>