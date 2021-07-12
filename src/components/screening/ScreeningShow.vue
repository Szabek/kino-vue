<template>
<CCard>
  <CCardHeader>
    <strong>Current screening</strong>
  </CCardHeader>
  <CCardBody>
    <MovieShow :movie="screening.movie"/>
  </CCardBody>
  <CCardHeader>
    <strong>Room</strong>
  </CCardHeader>
  <CCardBody>
    <CRow>
      <CCol>
        Name:
      </CCol>
      <CCol>
        {{screening.room.name}}
      </CCol>
    </CRow>
    <hr>
    <CRow>
      <CCol>
        Seats:
      </CCol>
      <CCol>
        {{screening.room.seats}}
      </CCol>
    </CRow>
    <CRow>
      <CCol></CCol>
      <CCol></CCol>
    </CRow>
  </CCardBody>
  <CCardHeader>
    <strong>Details</strong>
  </CCardHeader>
  <CCardBody>
    <CRow>
      <CCol>
        Start time:
      </CCol>
      <CCol>
        {{screening.start_time}}
      </CCol>
    </CRow>
    <hr>
    <CRow>
      <CCol>
        Price:
      </CCol>
      <CCol>
        {{screening.price}}$
      </CCol>
    </CRow>
  </CCardBody>
</CCard>
</template>

<script>
import MovieShow from "@/components/movie/MovieShow";

export default {
  components: {
    MovieShow
  },
  props: {
    screening: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>
