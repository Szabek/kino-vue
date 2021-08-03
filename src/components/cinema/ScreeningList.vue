<template>
  <div class="screening-list mx-auto">
    <div class="pt-4 d-flex">
      <b-nav class="days-nav">
        <b-nav-item
            class="days-nav-item"
            @click="activeDay = 0"
            :active="activeDay === 0">
          Today
        </b-nav-item>
        <b-nav-item
            class="days-nav-item"
            @click="activeDay = 1"
            :active="activeDay === 1">
          {{ getDayOfWeek(nextDays[0]) }}
        </b-nav-item>
        <b-nav-item
            class="days-nav-item"
            @click="activeDay = 2"
            :active="activeDay === 2">
          {{ getDayOfWeek(nextDays[1]) }}
        </b-nav-item>
        <b-nav-item
            class="days-nav-item"
            @click="activeDay = 3"
            :active="activeDay === 3">
          {{ getDayOfWeek(nextDays[2]) }}
        </b-nav-item>
      </b-nav>
    </div>
    <hr class="screening-list-hr">
    <div class="pb-3">
      <span class="screening-list-title">Cinema repertoire </span>
      <span>{{ activeDate }}</span>
    </div>
    <div v-if="groupedScreenings.length === 0" class="lds-circle"><div></div></div>
    <div v-if="groupedScreenings">
      <ScreeningCard v-for="screenings in groupedScreenings" :key="screenings.id" :screenings="screenings"/>
    </div>
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
      nextDays: [],
      activeDay: 0,
      activeDate: '',
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
  watch: {
    activeDay(newValue) {
      if (newValue >= 0 && newValue <=3) {
        const selectedDate = new Date()
        selectedDate.setDate(selectedDate.getDate() + newValue)
        this.activeDate = selectedDate.toISOString().slice(0, 10)

        this.$store.dispatch('screening/fetchScreeningsGrouped', {
          date: this.activeDate
        })
      }
    }
  },
  created() {
    store.dispatch('screening/fetchScreeningsGrouped', {date: this.getCurrentDate})
    this.setNextDays()
    this.activeDate = this.getCurrentDate
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
        if (day <= 6) {
          this.nextDays.push(day)
        } else {
          this.nextDays.push((day % 6) - 1 )
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
  color: rgb(255, 140, 0) !important;
}

.screening-list-title {
  font-size: 22px;
}

.screening-list-hr {
  background-color: rgb(255, 140, 0);
}

.lds-circle {
  display: flex;
  transform: translateZ(1px);
}
.lds-circle > div {
  margin: 10% auto;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgb(255, 140, 0);
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
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
