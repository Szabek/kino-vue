<template>
  <CCard>
    <CCardHeader class="pt-4 pb-2">
      <strong>Add new Screening:</strong>
    </CCardHeader>
    <ScreeningForm v-on:screeningFormSubmit="createScreening"/>
    <CAlert
        color="secondary"
        :show.sync="currentAlertCounter"
        closeButton
    >
      <span class="position-relative">
        Screening successfully added!
      </span>
      <CProgress
          :max="10"
          :value="currentAlertCounter"
          height="3px"
          color="primary"
          animate
      />
    </CAlert>
  </CCard>
</template>

<script>
import ScreeningForm from "@/components/admin/ScreeningForm"


export default {
  components: {
    ScreeningForm
  },
  data() {
    return {
      currentAlertCounter: 0
    }
  },
  methods: {
    createScreening(screeningToCreate) {
      this.$store.dispatch('screening/createScreening', screeningToCreate)
      this.currentAlertCounter = 5;
    },
  }

}
</script>

<style scoped>

</style>
