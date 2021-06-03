<template>
  <CCardBody>
    <CDataTable
        :items="items"
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
          <CCardBody>
            <CRow>
              <CCol class="col-auto">
                <h4>
                  {{ item.username }}
                </h4>
              </CCol>
              <CCol>
                <DeleteWarning/>
              </CCol>
            </CRow>
            <CInput
                label="Rename Category:"
                placeholder="New category name"
            />
            <CButton size="sm" color="success" class="">
              Rename
            </CButton>
          </CCardBody>
        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
import DeleteWarning from "@/components/DeleteWarning";

export default {
  components: {
    DeleteWarning
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    details: {
      type: Array,
      required: false,
    },
    collapseDuration: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {
    toggleDetails(item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
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