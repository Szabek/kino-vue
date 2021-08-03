<template>
<b-card class="mt-3">
  <h1>Szeregowiec Ryan</h1>
  <div >
    02-20-2021
    <b-button class="reservation-card-confirm">Confirm</b-button>
  </div>
</b-card>
</template>

<script>
export default {
  name: "UserReservationCard"
}
</script>

<style lang="scss" scoped>

.reservation-card-confirm {
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

</style>
