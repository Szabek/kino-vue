<template>
<div>
  {{this.getDayOfWeek(getCurrentDay)}}
  <ScreeningCard v-for="screening in screenings" :key="screening.id" :screening="screening"/>

  <div>

  </div>
</div>
</template>

<script>
import ScreeningCard from '@/components/cinema/ScreeningCard'
import {mapActions, mapState} from "vuex";
import store from '@/store/index'

export default {
  components: {
    ScreeningCard
  },
  computed: {
    getCurrentDay() {
      const date = new Date();
      return date.getDay().toLocaleString()
    },
    ...mapState('screening', ['screenings']),
  },
  created() {
    store.dispatch('screening/fetchScreeningsByDate', {date: '2021-07-27'})
  },
  methods: {
    getDayOfWeek(dayNumber) {
      const weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tues";
      weekday[3] = "Wed";
      weekday[4] = "Thur";
      weekday[5] = "Fri";
      weekday[6] = "Sat";

      return weekday[dayNumber];
    },
    ...mapActions('screening', ['fetchScreeningsByDate']),
  }

}
</script>

<style scoped>

</style>
