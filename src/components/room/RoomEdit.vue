<template>
  <CCardBody>
    <CRow class="pb-2">
      <CCol class="col-auto">
        <h4>{{ name }}</h4>
      </CCol>
      <a href="javascript:" v-on:click="deleteRoom">
        <CButton size="sm" color="danger">
          Delete
        </CButton>
      </a>
    </CRow>
    <ValidationObserver v-slot="{ handleSubmit }">
      <CForm @submit.prevent="handleSubmit(updateRoom)">
        <ValidationProvider name="Category" rules="required" v-slot="{ errors }">
          <span class="alert-warning">{{ errors[0] }}</span>
          <CInput
              v-model="room.name"
              label="Rename Room"
              horizontal
          />
        </ValidationProvider>
        <ValidationProvider name="Seats" rules="required|integer" v-slot="{ errors }">
          <span class="alert-warning">{{ errors[0] }}</span>
          <CInput
              v-model="room.seats"
              label="Seats number"
              horizontal
          />
        </ValidationProvider>
        <CButton size="sm" color="success" value="Submit" type="submit">
          Change
        </CButton>
      </CForm>
    </ValidationObserver>
  </CCardBody>
</template>

<script>

export default {
  data() {
    return {
      room: {}
    }
  },
  watch: {
    toggled(newValue) {
      if (newValue === true) {
        this.room = this.createRoomObject()
      }
    }
  },
  methods: {
    updateRoom() {
      this.$store
          .dispatch('room/updateRoom', this.room)
          .then(() => {
            this.room = this.createRoomObject()
          })
    },
    deleteRoom() {
      if (confirm('Are you sure?')) {
        this.$store.dispatch('room/deleteRoom', this.room.id)
      }
    },
    createRoomObject() {
      return {
        id: this.id,
        name: this.name,
        seats: this.seats
      }
    }
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    seats: {
      required: true,
    },

    toggled: {
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style scoped>
span {
  display: block;
}
</style>