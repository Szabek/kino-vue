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
          <RoomEdit
              :id="item.id"
              :name="item.name"
              :seats="item.seats"
              :toggled="item._toggled"
          />
        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>
import {mapState} from "vuex";
import RoomEdit from "@/components/room/RoomEdit";

const fields = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'seats',
    label: 'Seats',
    filter: false
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
    RoomEdit
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
    this.$store.dispatch('room/fetchRooms')
        .then(this.endLoading)
  },
  computed: {
    itemsInList() {
      return this.rooms.map((room, rowId) => {
        return {...room, rowId}
      })
    },
    ...mapState({rooms: state => state.room.rooms})
  },
  methods: {
    endLoading() {
      this.loading = false
    },
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