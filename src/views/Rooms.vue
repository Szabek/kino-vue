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
import RoomList from "@/components/room/RoomList";
import RoomCreate from "@/components/room/RoomCreate";

export default {
  components: {
    RoomList,
    RoomCreate
  }
}
</script>

<style scoped>

</style>