<template>
  <div class="container">
    <CRow>
      <CCol class="col-12 col-sm-6">
        <CreateCategory/>
      </CCol>
      <CCol class="col-12 col-sm-6">
        <CategoryList/>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";
import CreateCategory from "@/components/CreateCategory";

export default {
  components: {
    CategoryList,
    CreateCategory
  },
}
</script>

<style scoped>

</style>