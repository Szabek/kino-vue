<template>
  <CContainer>
    <CRow>
      <CCol class="col-12 col-xl-6">
        <MovieCreate/>
      </CCol>
      <CCol class="col-12 col-xl-6">
        <MovieList/>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import MovieList from "@/components/adminPanel/movie/MovieList";
import MovieCreate from "@/components/adminPanel/movie/MovieCreate";

export default {
  components: {
    MovieList,
    MovieCreate
  },
}
</script>

<style scoped>

</style>
