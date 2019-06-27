<template>
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      <Movie :movie="movie"/>
    </li>
  </ul>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  name: "MoviesList",
  data() {
    return {
      movies: []
    };
  },
  created() {
    this.getMovieData();
  },
  methods: {
    async getMovieData() {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=695ec778d96b453af67207ed17871412&language=en-US&sort_by=popularity.desc"
      );
      const movies = await res.json();
      this.movies = movies.results;
    }
  },
  components: {
    Movie
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

ul li {
  margin: 10px;
}
</style>
