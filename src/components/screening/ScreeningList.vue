<template>
  <CCardBody>
    <CDataTable
        :items="itemsInList"
        :fields="fields"
        :loading="loading"
        hover
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
            {{ Boolean(item._toggled) ? 'Hide' : 'Show' }}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          {{item}}
        </CCollapse>
      </template>
    </CDataTable>
    <div>
      <CPagination
          :activePage.sync="page"
          :pages="this.lastPage"
      />
    </div>
  </CCardBody>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      page: 1,
      loading: true,
      fields: [
        {
          key: 'movieTitle',
          label: 'movie'
        },
        {
          key: 'startTime',
          label: 'Start Time'
        },
        {
          key: 'price',
          label: 'Price'
        },
        {
          key: 'show_details',
          label: '',
          _style: 'width:1%',
          sorter: false,
          filter: false
        },
      ],
      details: [],
      collapseDuration: 0
    }
  },
  created() {
    this.$store.dispatch('screening/fetchScreenings', {page: this.page})
        .then(() => this.loading = false)
  },
  watch: {
    page(newValue) {
      if (newValue > 0 && newValue <= this.lastPage) {
        this.loading = true
        this.$store.dispatch('screening/fetchScreenings', {
          page: this.page
        }).then(() => this.loading = false)
      }
    }
  },
  computed: {
    itemsInList() {
      return this.screenings.map((screening, rowId) => {
        return {
          movieTitle: screening.movie.title,
          price: screening.price,
          startTime: screening.start_time,
          rowId
        }
      })
    },
    ...mapState('screening', ['screenings', 'lastPage']),
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