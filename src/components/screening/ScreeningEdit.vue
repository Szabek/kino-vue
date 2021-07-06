<template>
  <CCard>
    <CCardHeader >
      <strong>Edit Screening</strong>
    </CCardHeader>
    <CCardBody>
      <ValidationObserver ref="form">
        <CForm @submit.prevent="onSubmit" @reset.prevent="reset">
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
            <CCardBody>
              <CDataTable
                  :items="itemsInList"
                  :fields="fields"
                  :loading="loading"
                  hover
              >
                <template #pick_movie="{item, index}">
                  <td class="py-2">
                    <CButton
                        color="primary"
                        square
                        size="sm"
                        @click="pickMovie(item, index)"
                    >
                      Pick
                    </CButton>
                  </td>
                </template>
              </CDataTable>
              <div>
                <CPagination
                    :activePage.sync="page"
                    :pages="this.lastPage"
                />
              </div>
            </CCardBody>
            <template #footer>
              <CButton
                  color="secondary"
                  @click="movieModal = false"
              >
                Cancel
              </CButton>
            </template>
          </CModal>
          <ValidationProvider name="Room" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CSelect
                :value.sync='screeningToEdit.room_id'
                :options="roomsSelect"
                label="Room"
                placeholder="Please select"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Start time" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                :value.sync='screeningToEdit.start_time'
                label="Start time"
                type="datetime-local"
                horizontal
            />
          </ValidationProvider>
          <CInput
              :value.sync='screeningToEdit.price'
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
              <h4 class="d-flex justify-content-center px-3 mt-1 text-primary">{{ screeningToEdit.price }}</h4>
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
    <CAlert
        color="secondary"
        :show.sync="currentAlertCounter"
        closeButton
    >
      <span class="position-relative">
        Screening successfully added!
      </span>
      <CProgress
          :max="10"
          :value="currentAlertCounter"
          height="3px"
          color="primary"
          animate
      />
    </CAlert>
  </CCard>
</template>


<script>
import {mapState} from "vuex";

export default {
  props: {
    screening: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      screeningToEdit: this.createScreeningObject(),
      movieModal: false,
      page: 1,
      fields: [
        {
          key: 'title',
          label: 'Title'
        },
        {
          key: 'author',
          label: 'Author'
        },
        {
          key: 'categoryName',
          label: 'Category'
        },
        {
          key: 'pick_movie',
          label: '',
          _style: 'width:1%',
          sorter: false,
          filter: false
        },
      ],
      details: [],
      loading: false,
      currentAlertCounter: 0
    }
  },
  created() {
    this.$store.dispatch('movie/fetchMovies', 1)
    this.$store.dispatch('room/fetchRooms')
  },
  computed: {
    itemsInList() {
      return this.movies.map((movie, rowId) => {
        return {
          ...movie,
          rowId,
          categoryName: movie.category.name
        }
      })
    },
    roomsSelect() {
      return this.rooms.map(room => {
        const label = `${room.name} | ${room.seats}`
        return {value: room.id, label: label}
      })
    },
    ...mapState('movie', ['movies']),
    ...mapState('room', ['rooms']),
    ...mapState('movie', ['lastPage'])
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.updateScreening()
        this.$nextTick(() => {
          this.$refs.form.reset();
          this.currentAlertCounter = 5;
        });
      });
    },
    reset() {
      this.screeningToEdit = this.createScreeningObject();
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    updateScreening() {
      this.$store.dispatch('screening/updateScreening', {
        id: this.screeningToEdit.id,
        updatedScreening: this.screeningToEdit})
    },
    increasePrice() {
      this.screeningToEdit.price = parseFloat(this.screeningToEdit.price) + 0.5
    },
    decreasePrice() {
      this.screeningToEdit.price = parseFloat(this.screeningToEdit.price) - 0.5
    },
    pickMovie(item) {
      this.screeningToEdit.movie_id = item.id;
      this.movieModal = false;
    },
    createScreeningObject() {
      return {
        id: this.screening.id,
        movie_id: this.screening.movie.id,
        room_id: this.screening.room.id,
        start_time: this.screening.start_time,
        price: this.screening.price,
      }
    }
  },
  watch: {
    page(newValue) {
      if (newValue > 0 && newValue <= this.lastPage) {
        this.loading = true
        this.$store.dispatch('movie/fetchMovies', {
          page: this.page
        }).then(() => this.loading = false)
      }
    }
  }
}
</script>

<style scoped>

</style>