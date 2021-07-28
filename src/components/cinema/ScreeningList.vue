<template>
  <div class="screening-list mx-auto">
    <div class="pt-4 pb-4 d-flex">
      <b-nav class="days-nav">
        <b-nav-item active class="days-nav-item">Today</b-nav-item>
        <b-nav-item class="days-nav-item">{{getDayOfWeek(nextDays[0])}}</b-nav-item>
        <b-nav-item class="days-nav-item">{{getDayOfWeek(nextDays[1])}}</b-nav-item>
        <b-nav-item class="days-nav-item">{{getDayOfWeek(nextDays[2])}}</b-nav-item>
      </b-nav>
    </div>
    <div class="pb-3">
      <span class="screening-list-title">Cinema repertoire </span>
      <span>{{getCurrentDate}}</span>
    </div>
    <ScreeningCard v-for="screenings in groupedScreenings" :key="screenings.id" :screenings="screenings"/>
  </div>
</template>

<script>
import ScreeningCard from '@/components/cinema/ScreeningCard'
import {mapState} from "vuex";
import store from '@/store/index'

export default {
  components: {
    ScreeningCard
  },
  data() {
    return {
      active: true,
      nextDays: [],
    }
  },
  computed: {
    getCurrentDay() {
      const date = new Date();
      return date.getDay();
    },
    getCurrentDate() {
      return new Date().toISOString().slice(0, 10)
    },
    ...mapState('screening', ['groupedScreenings'])
  },
  created() {
    store.dispatch('screening/fetchScreeningsGrouped', {date: '2021-07-27'})
    this.setNextDays()
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
    setNextDays() {
      for (let i = 0; i < 3; i++) {
        let day = this.getCurrentDay + (i + 1)
        if (day <= 7) {
          this.nextDays.push(day)
        } else {
          this.nextDays.push(7 % day)
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.screening-list {
  width: 75%;
}

.days-nav-item > a {
  color: rgb(27, 22, 18);
  font-size: 22px;

  &:hover {
    transition: 0.3s;
    color: rgb(255, 140, 0);
  }
}

.active {
  font-weight: bold;
  transition: 0.3s;
  color: rgb(255, 140, 0)!important;
}

.screening-list-title {
  font-size: 22px;
}

@media (max-width: 767px) {

  .screening-list {
    width: 100%;
  }

  .days-nav-item > a {
    font-size: 18px;
  }
}
</style>
