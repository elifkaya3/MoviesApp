<template>
  <v-container >
    <v-row>
        <v-col
        cols="4"
        sm="4"
       style="display:contents" >
 <v-card
      :loading="loading"
      class="mx-auto my-4"
      max-width="350"
      v-for="item in cart"
      :key="item.movie.id"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="500"
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
<!-- 
        <div>
          {{ movie.overview }}
        </div> -->
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2"  @click="detail">
          Detail
        </v-btn>
        <v-btn color="deep-purple lighten-2"  @click="addToCart">
          Add Favourite
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
    </v-row>
   
  </v-container>
</template>

<script>
import {mapActions,mapGetters} from "vuex"

  export default {
   computed:{
    cart(){
      return this.$store.movie.cart;      
    }
   }
  }
</script>