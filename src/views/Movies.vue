<template>
  <div class="container">
    <CRow>
      <CCol class="col-12 col-xl-6">
        <MovieCreate/>
      </CCol>
      <CCol class="col-12 col-xl-6">
        <MovieList/>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";
import MovieCreate from "@/components/MovieCreate";

export default {
  components: {
    MovieList,
    MovieCreate
  },
}
</script>

<style scoped>

</style>