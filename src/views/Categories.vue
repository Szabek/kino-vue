<template>
  <div class="container">
    <CRow>
      <CCol class="col-12 col-sm-6">
        <CreateCategory/>
      </CCol>
      <CCol class="col-12 col-sm-6">
        <TableList :details="details" :fields="fields" :items="items"/>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import TableList from "@/components/CategoryList";
import CreateCategory from "@/components/CreateCategory";
import {mapState} from "vuex";

const items = [
  {name: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {name: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {name: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},

]

const fields = [
  {
    key: 'name',
    label: 'Category'
  },
  {
    key: 'show_details',
    label: '',
    _style: 'width:1%',
    sorter: false,
    filter: false
  },
]

export default {
  components: {
    TableList,
    CreateCategory
  },
  created() {
    this.$store.dispatch('fetchCategories')
  },
  data() {
    return {
      items: items.map((item, id) => {
        return {...item, id}
      }),
      fields,
      details: [],
    }
  },
  computed: mapState(['categories'])
}
</script>


<style scoped>

</style>