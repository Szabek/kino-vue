<template>
  <CContainer>
    <CRow>
      <CCol class="col-12 col-md-6">
        <RoomCreate/>
      </CCol>
      <CCol class="col-12 col-md-6">
        <RoomList/>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import RoomList from "@/components/admin/RoomList";
import RoomCreate from "@/components/admin/RoomCreate";

export default {
  components: {
    RoomList,
    RoomCreate
  }
}
</script>

<style scoped>

</style>
