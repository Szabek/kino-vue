<template>
<b-card class="mt-3">
  <h1>{{reservation.screening.movie.title}}</h1>
  <div >
    {{reservation.screening.start_time}}
    <div v-if="reservation.is_paid === 0">
      <b-button class="reservation-card-confirm-button">Confirm Reservation</b-button>
    </div>
    <span v-if="reservation.is_paid === 1" class="reservation-card-confirmed">Reservation confirmed</span>
  </div>
</b-card>
</template>

<script>
export default {
  props: {
    reservation: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.reservation-card-confirm-button {
  margin-left: 50%;
  background-color: rgb(255, 140, 0);
  color: rgb(10, 10, 10);
  font-weight: bold;
  padding: 6px 30px;
  margin-bottom: 5px;

&:hover {
   transition: 0.3s;
   background-color: rgb(125, 72, 0);
 }
}

.reservation-card-confirmed {
  margin-left: 40%;
  color: rgb(255, 140, 0);
  font-weight: bold;
  font-size: 20px;
}

</style>
