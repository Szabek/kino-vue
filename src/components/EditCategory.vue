<template>
  <CCardBody>
    <CRow>
      <CCol class="col-auto">
      </CCol>
      <CCol>
        <DeleteWarning/>
      </CCol>
    </CRow>
    <CForm>
      <CInput
          label="Rename Category:"
          placeholder="New category name"
      />
      <CButton size="sm" color="success">
        Rename
      </CButton>
    </CForm>
  </CCardBody>
</template>

<script>
import DeleteWarning from "@/components/DeleteWarning";

export default {
  name: "EditCategory",
  components: {
    DeleteWarning
  }
}
</script>

<style scoped>

</style>