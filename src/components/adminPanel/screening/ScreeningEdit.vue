<template>
  <CCard>
    <CCardHeader>
      <strong>Edit Screening</strong>
    </CCardHeader>
    <ScreeningForm :screening="screening" v-on:screeningFormSubmit="updateScreening"/>
  </CCard>
</template>

<script>
import ScreeningForm from "@/components/adminPanel/screening/ScreeningForm"

export default {
  components: {
    ScreeningForm
  },
  props: {
    screening: {
      type: Object,
      required: true,
    },
    data() {
      return {
        currentAlertCounter: 0
      }
    },
  },
  methods: {
    updateScreening(screeningToEdit) {
      this.$store.dispatch('screening/updateScreening', {
        id: screeningToEdit.id,
        updatedScreening: screeningToEdit
      })
    },
  },
}
</script>

<style scoped>

</style>
