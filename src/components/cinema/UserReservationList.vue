<template>
<div>
  <UserReservationCard v-for="reservation in reservations" :key="reservation.id" :reservation="reservation"/>
</div>
</template>

<script>
import UserReservationCard from '@/components/cinema/UserReservationCard'

export default {
  components: {
    UserReservationCard
  },
  props: {
    reservations: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
