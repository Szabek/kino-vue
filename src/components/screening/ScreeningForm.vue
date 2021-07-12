<template>
  <CCardBody>
    <ValidationObserver ref="form">
      <CForm @submit.prevent="onSubmit" @reset.prevent="reset">
        <ValidationProvider name="Movie" rules="required" v-slot="{ errors }">
          <div class="alert-warning">{{ errors[0] }}</div>
          <div class="text-right pb-3">
            <span class="float-left">Movie:</span>

            <CButton
                class="w-75"
                @click="movieModal = true"
                color="primary"
                variant="outline"
            >
              Choose movie
            </CButton>
          </div>
          <CModal
              title="Choose Movie"
              color="primary"
              size="lg"
              :show.sync="movieModal"
          >
            <ScreeningMovieSelect v-model="form.movie_id" v-on:input="movieModal = false"/>
            <template #footer>
              <CButton
                  color="secondary"
                  @click="movieModal = false"
              >
                Cancel
              </CButton>
            </template>
          </CModal>
        </ValidationProvider>
        <ValidationProvider name="Room" rules="required" v-slot="{ errors }">
          <div class="alert-warning">{{ errors[0] }}</div>
          <CSelect
              :value.sync='form.room_id'
              :options="roomsSelect"
              label="Room"
              placeholder="Please select"
              horizontal
          />
        </ValidationProvider>
        <ValidationProvider name="Start time" rules="required" v-slot="{ errors }">
          <div class="alert-warning">{{ errors[0] }}</div>
          <CInput
              :value.sync='form.start_time'
              label="Start time"
              type="datetime-local"
              horizontal
          />
        </ValidationProvider>
        <CInput
            :value.sync='form.price'
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
            <h4 class="d-flex justify-content-center px-3 mt-1 text-primary">{{ form.price }}</h4>
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
</template>

<script>
import ScreeningMovieSelect from "@/components/screening/ScreeningMovieSelect"
import {mapState} from "vuex";

export default {
  components: {
    ScreeningMovieSelect
  },
  props: {
    screening: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      form: this.createScreeningObject(),
      movieModal: false,
      currentAlertCounter: 0
    }
  },
  computed: {
    roomsSelect() {
      return this.rooms.map(room => {
        const label = `${room.name} | ${room.seats}`
        return {value: room.id, label: label}
      })
    },
    ...mapState('room', ['rooms']),
  },
  created() {
    this.$store.dispatch('room/fetchRooms')
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.$emit('screeningFormSubmit', this.form)
        this.screening ? null : this.form = this.createScreeningObject(),
            this.$nextTick(() => {
              this.$refs.form.reset();
            });
      });
    },
    reset() {
      this.form = this.createScreeningObject();
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    increasePrice() {
      this.form.price = parseFloat(this.form.price) + 0.5
    },
    decreasePrice() {
      this.form.price = parseFloat(this.form.price) - 0.5
    },
    createScreeningObject() {
      if (this.screening) {
        const date = new Date(this.screening.start_time).toISOString().replace(/:00.000Z/, "");

        return {
          id: this.screening.id,
          movie_id: this.screening.movie.id,
          room_id: this.screening.room.id,
          start_time: date,
          price: this.screening.price,
        }
      }
      return {
        movie_id: null,
        room_id: null,
        start_time: null,
        price: 20,
      }
    }
  },
}
</script>

<style scoped>

</style>
