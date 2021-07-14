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
import MovieShow from "@/components/adminPanel/movie/MovieShow";

export default {
  components: {
    MovieShow
  },
  data() {
    return {
      page: 1,
      loading: true,
      fields: [
        {
          key: 'title',
          label: 'Title'
        },
        {
          key: 'author',
          label: 'Author'
        },
        {
          key: 'categoryName',
          label: 'Category'
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
  computed: {
    itemsInList() {
      return this.movies.map((movie, rowId) => {
        return {
          ...movie,
          rowId,
          categoryName: movie.category.name
        }
      })
    },
    ...mapState('movie', ['movies']),
    ...mapState('movie', ['lastPage'])
  },
  watch: {
    page(newValue) {
      if (newValue > 0 && newValue <= this.lastPage) {
        this.loading = true
        this.$store.dispatch('movie/fetchMovies', {
          page: this.page
        }).then(() => this.loading = false)
      }
    }
  },
  created() {
    this.$store.dispatch('movie/fetchMovies', {page: this.page})
        .then(() => this.loading = false)
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
