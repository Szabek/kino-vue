<template>
  <CCardBody>
    <CDataTable
        :items="itemsInList"
        :fields="fields"
        :loading="loading"
        hover
    >
      <template #pick_movie="{item, index}">
        <td class="py-2">
          <CButton
              color="primary"
              square
              size="sm"
              @click="pickMovie(item, index)"
          >
            Pick
          </CButton>
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
          key: 'pick_movie',
          label: '',
          _style: 'width:1%',
          sorter: false,
          filter: false
        },
      ],
      details: [],
      loading: false,
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
    ...mapState('movie', [
        'movies',
        'lastPage'
    ]),
  },
  methods: {
    pickMovie(item) {
      this.$emit('input', item.id)
    }
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
    this.$store.dispatch('movie/fetchMovies', 1)
  }
}
</script>

<style scoped>

</style>
