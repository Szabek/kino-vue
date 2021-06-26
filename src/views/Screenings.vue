<template>
  <CContainer>
    <CRow>
      <CCol class="col-12 col-xl-6">
        <ScreeningCreate/>
      </CCol>
      <CCol class="col-12 col-xl-6">
        <ScreeningList/>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import ScreeningCreate from "@/components/screening/ScreeningCreate";
import ScreeningList from "@/components/screening/ScreeningList";

export default {
  components: {
    ScreeningCreate,
    ScreeningList
  }

}
</script>

<style scoped>

</style>