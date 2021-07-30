<template>
  <CCardBody>
    <CRow>
      <CCol class="col-12 col-sm-6">
        <CImg
            :src="STORAGE_URL + movie.picture_source"
            width="160"
        />
      </CCol>
      <CCol class="col-12 col-sm-6">
        <h4>
          {{ movie.title }}
        </h4>
        <h6>
          <CLink
              :href="movie.trailer"
              target="_blank"
          >
            See Trailer
          </CLink>
        </h6>
        <p class="text-muted">Release date: {{ movie.release_date }}</p>
        <p>{{ movie.description }}</p>
        <router-link :to="{ name: 'Movies-edit', params: { id: this.movie.id }}">
          <CButton size="sm" color="info" class="">
            Edit
          </CButton>
        </router-link>
        <CButton size="sm" color="danger" class="ml-1" v-on:click="deleteMovie">
          Delete
        </CButton>
      </CCol>
    </CRow>
  </CCardBody>
</template>

<script>
import {STORAGE_URL} from "@/constants";

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      STORAGE_URL: STORAGE_URL
    }
  },
  methods: {
    deleteMovie() {
      if (confirm('Are you sure?')) {
        this.$store.dispatch('movie/deleteMovie', this.movie.id)
      }
    }
  }
}
</script>

<style scoped>

</style>
