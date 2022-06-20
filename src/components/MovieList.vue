<template>
<div>
<span v-for="(movie, index) in getMovieList.results"
            :key="index"> {{movie}}
</span>
</div>
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
                  readonly 766154594
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
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    

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
      getMovieList:"movie/getMovieList"
      })
    },
    
  }
</script>