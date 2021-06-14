<template>
  <CCardBody>
    <CDataTable
        :items="itemsInList"
        :fields="fields"
        hover
        :loading="loading"
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
          <MovieShow :movie="item"/>
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
import MovieShow from "@/components/MovieShow";

const fields = [
  {
    key: 'title',
    label: 'Title'
  },
  {
    key: 'author',
    label: 'Author'
  },
  {
    key: 'category',
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
    MovieShow
  },
  data() {
    return {
      page: 1,
      loading: true,
      fields: fields,
      details: [],
      collapseDuration: 0
    }
  },
  created() {
    this.$store.dispatch('movie/fetchMovies', {page: this.page})
        .then(this.endLoading)
  },
  watch: {
    page(newValue) {
      if (newValue > 0 && newValue <= this.lastPage) {
        this.loading = true
        this.$store.dispatch('movie/fetchMovies', {
          page: this.page
        }).then(this.endLoading)
      }
    }
  },
  computed: {
    itemsInList() {
      return this.movies.map((item, rowId) => {
        return {...item, rowId}
      })
    },
    ...mapState({
          movies: state => state.movie.movies,
          lastPage: state => state.movie.lastPage
        },
    )
  },
  methods: {
    endLoading() {
      this.loading = false
    },
    toggleDetails(item) {
      this.$set(this.itemsInList[item.rowId], '_toggled', !item._toggled)
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