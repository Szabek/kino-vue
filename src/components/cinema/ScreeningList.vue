<template>
<div>
  {{this.getDayOfWeek(getCurrentDay)}}
  {{this.getDayOfWeek(getCurrentDay + 1)}}
  {{this.getDayOfWeek(getCurrentDay + 2)}}
  <ScreeningCard/>
  <ScreeningCard/>
  <ScreeningCard/>
  <ScreeningCard/>
  <ScreeningCard/>
  <div>

  </div>
</div>
</template>

<script>
import ScreeningCard from '@/components/cinema/ScreeningCard'

export default {
  components: {
    ScreeningCard
  },
  computed: {
    getCurrentDay() {
      const date = new Date();
      return date.getDay().toLocaleString()
    }
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
    getNextDays(firstDayNumber) {

    }
  }
}
</script>

<style scoped>

</style>
