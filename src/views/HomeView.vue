<template>
  <div class="home">
    <MovieList/>
  </div>
</template>

<script>

import MovieList from "@/components/MovieList"
export default {
  name: 'HomeView',
  components: {
    MovieList
  }
}
</script>
