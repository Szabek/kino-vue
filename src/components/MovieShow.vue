<template>
  <CCardBody>
    <CRow>
      <CCol class="col-12 col-sm-6">
        <CImg
            :src="imgStorage + movie.picture_source"
            width="160"
        />
      </CCol>
      <CCol class="col-12 col-sm-6">
        <h4>
          {{ movie.title }}
        </h4>
        <h6>
          <a href="movie.trailer">Trailer</a>
        </h6>
        <p class="text-muted">Release date: {{ movie.release_date }}</p>
        <p>{{movie.description}}</p>
        <CButton size="sm" color="info" class="">
          Edit
        </CButton>
        <CButton size="sm" color="danger" class="ml-1">
          Delete
        </CButton>
      </CCol>
    </CRow>
  </CCardBody>
</template>

<script>
export default {
  data() {
    return {
      imgStorage: "http://localhost:8000/storage/"          //TODO: global
    }
  },
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>