<template>
  <div>
    <MovieEdit :id="this.id"/>
  </div>
</template>

<script>
import MovieEdit from "@/components/movie/MovieEdit";

export default {
  name: "MoviesEdit",
  props: {
    id: {
      required: true,
    }
  },
  components: {
    MovieEdit
  }
}
</script>

<style scoped>

</style>