<template>
<div class="p-4">
  <h1>Order a ticket</h1>
  <hr class="reservation-form-hr">
  <h3>Ticket:</h3>
  <span>{{screening.movie.title}} | </span>
  <span>{{screening.start_time}}</span>
  <div class="pt-3">
    <b-form>
      <b-row>
        <b-col>

        </b-col>
        <b-col>
          <select name="" id=""></select>
        </b-col>
      </b-row>
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
export default {
  props: {
    screening: {
      required: true,
      type: Object
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

</style>
