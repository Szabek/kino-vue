<template>
  <div>
    <CRow>
      <CCol>
        <CRow>
          <CCol>
            <CInput
                label="Category"
                placeholder="Enter new Category"
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol>
        <TableList/>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import TableList from "@/components/TableList";

export default {
  components: {
    TableList
  },
  data() {
    return {
      category: ''
    }
  },
}
</script>

<style scoped>

</style>