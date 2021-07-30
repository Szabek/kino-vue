<template>
  <div class="p-4">
    <h1>Order a ticket</h1>
    <hr class="reservation-form-hr">
    <h3>Ticket:</h3>
    <span>{{ screening.movie.title }} | </span>
    <span>{{ screening.start_time }}</span>
    <div class="pt-3">
      <b-form class="">
        <div class="pt-4">
          <span>Number of seats:</span>
          <b-form-select v-model="form.seats" :options="seatsNumber" size="sm"
                         class="mt-3"></b-form-select>
        </div>
        <div class="pt-3 pl-3">
          <p>Total price: <span class="reservation-form-price">{{ form.total_price }}$</span></p>

        </div>
        <hr class="reservation-form-hr">
        <div class="d-flex">
          <b-button
              class="reservation-form-button"
              size="lg"
          >
            Order
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: {
    screening: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      form: {
        userId: '',
        screeningId: '',
        seats: '',
        total_price: ''
      }
    }
  },
  computed: {
    seatsNumber: {
      get: function () {
        return [1, 2, 3, 4, 5, 6]                                 //TODO: Logika jeżeli liczba dostępnych miejsc mniejsza niż 6
      }
    },
    ...mapState('authUser', ["user"])
  },
  watch: {
    'form.seats': function (newValue) {
      if (newValue) {
        this.form.total_price = this.form.seats * this.screening.price
      }
    }
  },
  created() {
    this.createReservationObject()
  },
  methods: {
    createReservationObject() {
      this.form.userId = this.user.user.id
      this.form.screeningId = this.screening.id
      this.form.seats = 1
      this.form.total_price = this.screening.price
    }
  }
}
</script>

<style lang="scss" scoped>

.reservation-form-hr {
  background-color: rgb(255, 140, 0);
}

.reservation-form-button {
  color: rgb(15, 15, 15);
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(255, 140, 0);
  margin: auto;

  &:hover {
    transition: 0.3s;
    background-color: rgb(125, 72, 0);
  }
}

.reservation-form-price {
  color: rgb(255, 140, 0);
  font-weight: bold;
}

</style>
