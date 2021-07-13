<template>
  <CCardBody>
    <CDataTable
        :items="itemsInList"
        :fields="fields"
        :loading="loading"
        hover
    >
      <template #show_edit="{item}">
        <td class="py-2">
          <router-link :to="{ name: 'Screenings-edit', params: { id: item.screeningId }}">
            <CButton
                size="sm"
                color="primary"
                variant="outline"
                square
            >
              Edit
            </CButton>
          </router-link>
        </td>
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
          label: 'Movie'
        },
        {
          key: 'movieAuthor',
          label: 'Author'
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
          key: 'show_edit',
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
  computed: {
    itemsInList() {
      return this.screenings.map((screening, rowId) => {
        return {
          screeningId: screening.id,
          movieId: screening.movie.id,
          movieTitle: screening.movie.title,
          movieAuthor: screening.movie.author,
          startTime: screening.start_time,
          price: screening.price,
          rowId
        }
      })
    },
    ...mapState('screening', ['screenings', 'lastPage']),
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
  created() {
    this.$store.dispatch('screening/fetchScreenings', {page: this.page})
        .then(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>
