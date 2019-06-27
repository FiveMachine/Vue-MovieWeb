<template>
  <img :src="posterURL" :alt="movie.title">
</template>

<script>
const POSTER_URL = "https://image.tmdb.org/t/p/w154/";
export default {
  name: "Movie",
  props: ["movie"],
  computed: {
    posterURL() {
      return `${POSTER_URL}${this.movie.poster_path}`;
    }
  }
};
</script>

<style scoped>
img {
  box-shadow: 0 0 35px #000;
}
</style>
