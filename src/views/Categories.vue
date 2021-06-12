<template>
  <div class="container">
    <CRow>
      <CCol class="col-12 col-sm-6">
        <CategoryCreate/>
      </CCol>
      <CCol class="col-12 col-sm-6">
        <CategoryList/>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";
import CategoryCreate from "@/components/CategoryCreate";

export default {
  components: {
    CategoryList,
    CategoryCreate
  },
}
</script>

<style scoped>

</style>