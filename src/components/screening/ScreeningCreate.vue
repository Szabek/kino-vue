<template>
  <CCard>
    <CCardHeader class="pt-4 pb-2">
      <strong>Add new Screening:</strong>
    </CCardHeader>
    <CCardBody>
      <ValidationObserver ref="form">
        <CForm @submit.prevent="onSubmit" @reset.prevent="reset">
          <ValidationProvider name="Movie" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CSelect
                :value.sync='screening.movie_id'
                label="Movie"
                horizontal
                :options="moviesSelect"
                placeholder="Please select"
            />
          </ValidationProvider>
          <ValidationProvider name="Room" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CSelect
                :value.sync='screening.room_id'
                :options="roomsSelect"
                label="Room"
                placeholder="Please select"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Start time" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                :value.sync='screening.start_time'
                label="Start time"
                type="datetime-local"
                horizontal
            />
          </ValidationProvider>
          <CInput
              :value.sync='screening.price'
              label="Price"
              min="10"
              max="50"
              step="0.5"
              type="range"
              horizontal
          />
          <CRow>
            <CCol>
              <CButton class="float-right" color="primary" @click="decreasePrice">
                &loarr;
              </CButton>
            </CCol>
            <CCol class="col-sm-2">
              <h4 class="d-flex justify-content-center px-3 mt-1 text-primary">{{ screening.price }}</h4>
            </CCol>
            <CCol>
              <CButton color="primary" @click="increasePrice">
                &roarr;
              </CButton>
            </CCol>
          </CRow>
          <hr>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-check-circle"/>
            Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger" class="ml-1">
            <CIcon name="cil-ban"/>
            Reset
          </CButton>
        </CForm>
      </ValidationObserver>
    </CCardBody>
  </CCard>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      screening: this.newScreeningObject()
    }
  },
  created() {
    this.$store.dispatch('movie/fetchMovies', 1)
    this.$store.dispatch('room/fetchRooms')
  },
  computed: {
    moviesSelect() {
      return this.movies.map(movie => {
        const label = `${movie.title} | ${movie.author}`
        return {value: movie.id, label: label}
      })
    },
    roomsSelect() {
      return this.rooms.map(room => {
        const label = `${room.name} | ${room.seats}`
        return {value: room.id, label: label}
      })
    },
    ...mapState('movie', ['movies']),
    ...mapState('room', ['rooms'])
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.createScreening()
        this.screening = this.newScreeningObject();
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    reset() {
      this.screening = this.newScreeningObject();
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    createScreening() {
      this.$store.dispatch('screening/createScreening', this.screening)
    },
    newScreeningObject() {
      return {
        movie_id: '',
        room_id: '',
        start_time: '',
        price: 20.0
      }
    },
    increasePrice() {
      this.screening.price = parseFloat(this.screening.price) + 0.5
    },
    decreasePrice() {
      this.screening.price = parseFloat(this.screening.price) - 0.5
    }
  },
}
</script>

<style scoped>

</style>