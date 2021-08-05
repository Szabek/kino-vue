<template>
  <b-container >
    <b-row>
      <b-col md="4">
       <UserData/>
      </b-col>
      <b-col>
       <UserReservationList :reservations="reservations"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserData from "@/components/cinema/UserData"
import UserReservationList from "@/components/cinema/UserReservationList"
import {mapState} from "vuex";

export default {
  components: {
    UserData,
    UserReservationList
  },
  computed: {
    ...mapState("reservation", [
        "reservations"
    ])
  },
  created() {
    this.$store.dispatch("reservation/fetchReservations")
  }
}
</script>

<style scoped>

</style>
