<template>
  <CContainer>
    <CRow>
      <CCol class="col-12 col-sm-6">
        <CategoryCreate/>
      </CCol>
      <CCol class="col-12 col-sm-6">
        <CategoryList/>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import CategoryList from "@/components/category/CategoryList";
import CategoryCreate from "@/components/category/CategoryCreate";

export default {
  components: {
    CategoryList,
    CategoryCreate
  },
}
</script>

<style scoped>

</style>