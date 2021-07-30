<template>
  <CCard>
    <CCardHeader class="pt-4 pb-2">
      <strong>Add new Room:</strong>
    </CCardHeader>
    <CCardBody>
      <ValidationObserver ref="form">
        <CForm @submit.prevent="onSubmit" @reset.prevent="reset">
          <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                v-model="room.name"
                label="Room name"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Seats" rules="required|integer" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                v-model="room.seats"
                label="Seats number"
                horizontal
            />
          </ValidationProvider>
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
export default {
  data() {
    return {
      room: {}
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.createRoom()
        this.room = {};
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    reset() {
      this.room = {}
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    createRoom() {
      this.$store.dispatch('room/createRoom', this.room)
    },
  }
}
</script>

<style scoped>

</style>