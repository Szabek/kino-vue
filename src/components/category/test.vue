<template>
  <div v-if="message">
    <h1>{{message}}</h1>
    <button v-on:click="addPoint">
      Add point
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      points: 1
    }
  },
  methods: {
    addPoint() {
      this.points++
    }
  }
}
</script>

<style scoped>

</style>