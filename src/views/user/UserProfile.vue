<template>
  <b-container >
    <b-row>
      <b-col md="4">
       <UserData/>
      </b-col>
      <b-col>
       <UserReservationList/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserData from "@/components/cinema/UserData"
import UserReservationList from "@/components/cinema/UserReservationList"

export default {
  components: {
    UserData,
    UserReservationList
  }
}
</script>

<style scoped>

</style>
