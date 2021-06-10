<template>
  <div>

    <CButton
        @click="warningModal = true"
        color="danger"
        size="sm"
        square
    >
      Delete
    </CButton>
    <CModal
        title="Warning"
        color="danger"
        :show.sync="warningModal"
    >
      Are you sure you want to delete the item?
      <template v-slot:footer>
        <CButton
            @click="warningModal = true"
            color="secondary"

            square
        >
          Cancel
        </CButton>
        <CButton
            @click="warningModal = true"
            color="danger"

            square
        >
          Delete
        </CButton>
      </template>
    </CModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      warningModal: false
    }
  }
}
</script>

<style scoped>

</style>