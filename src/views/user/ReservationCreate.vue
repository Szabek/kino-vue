<template>
  <b-container >
    <b-row v-if="screening">
      <b-col md="4">
        <ScreeningShow :screening="screening"/>
      </b-col>
      <b-col>
        <ReservationForm :screening="screening"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";
import ReservationForm from '@/components/cinema/ReservationForm'
import ScreeningShow from '@/components/cinema/ScreeningShow'

export default {
  components: {
    ReservationForm,
    ScreeningShow
  },
  props: {
    id: {
      required: true,
    }
  },
  computed: {
    screening() {
      return this.$store.getters["screening/getScreeningById"](this.id);
    }
  },
  methods: {
    ...mapActions('screening', [
      'fetchScreening'
    ])
  },
  created() {
    if (!this.screening) {
      this.fetchScreening(this.id)
    }
  }
}
</script>

<style scoped>

</style>
