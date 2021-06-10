<template>
  <CCardBody v-if="categories.length">
    <CDataTable
        :items="itemsInList"
        :fields="fields"
        column-filter
        items-per-page-select
        :items-per-page="10"
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
          <EditCategory :id="item.id" :name="item.name" :toggled="item._toggled"/>

        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
import EditCategory from "@/components/EditCategory";
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
    EditCategory
  },
  data() {
    return {
      fields: fields,
      details: [],
      collapseDuration: 0
    }
  },
  created() {
    this.$store.dispatch('category/fetchCategories')
  },
  computed: {
    itemsInList() {
      return this.categories.map((item, rowId) => {
        return {...item, rowId}
      })
    },
    ...mapState({categories: state => state.category.categories})
  },
  methods: {
    toggleDetails(item) {
      this.$set(this.itemsInList[item.rowId], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => {
        this.collapseDuration = 0
      })
    }
  },
}
</script>

<style scoped>

</style>