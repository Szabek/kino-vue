<template>
  <CCardBody>
    <CDataTable
        :items="itemsInList"
        :fields="fields"
        :loading="loading"
        :items-per-page="10"
        column-filter
        items-per-page-select
        hover
        sorter
        pagination
    >
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
              color="primary"
              variant="outline"
              square
              size="sm"
              @click="toggleDetails(item, index)"
          >
            {{ Boolean(item._toggled) ? 'Hide' : 'Edit' }}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CategoryEdit :id="item.id" :name="item.name" :toggled="item._toggled"/>
        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
import CategoryEdit from "@/components/category/CategoryEdit";
import {mapState} from "vuex";

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
    CategoryEdit
  },
  data() {
    return {
      loading: true,
      fields: fields,
      details: [],
      collapseDuration: 0
    }
  },
  created() {
    this.$store.dispatch('category/fetchCategories')
        .then(() => this.loading = false)
  },
  computed: {
    itemsInList() {
      return this.categories.map((category, rowId) => {
        return {...category, rowId}
      })
    },
    ...mapState('category', ['categories'])
  },
  methods: {
    toggleDetails(item) {
      item._toggled = !item._toggled
      this.collapseDuration = 300
      this.$nextTick(() => {
        this.collapseDuration = 0
      })
    }
  }
}
</script>

<style scoped>

</style>