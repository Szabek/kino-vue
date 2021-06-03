<template>
  <div class="container">
    <CRow>
      <CCol class="col-12 col-sm-6">
        <h3 class="pt-4">Add new Category:</h3>
        <CInput
            class="pt-2"
            placeholder="Enter new Category"
        />
        <CButton
            color="success"
            shape="pill"
        >
          Add
        </CButton>
      </CCol>
      <CCol class="col-12 col-sm-6">
        <TableList :details="details" :collapse-duration="collapseDuration" :fields="fields" :items="items"/>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import TableList from "@/components/TableList";

const items = [
  {username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
  {username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
]

const fields = [
  {key: 'username'},
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
  },
  data() {
    return {
      items: items.map((item, id) => {
        return {...item, id}
      }),
      fields,
      details: [],
      collapseDuration: 0
    }
  },
}
</script>

<style scoped>

</style>