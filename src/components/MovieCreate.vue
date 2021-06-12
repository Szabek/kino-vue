<template>
  <CCard>
    <CCardHeader>
      <strong>Add new movie</strong>
      <CIcon
          class="float-right"
          name="cil-calculator"
      />
    </CCardHeader>
    <CCardBody>
      <ValidationObserver ref="form">
        <CForm @submit.prevent="onSubmit" @reset.prevent="reset">
          <ValidationProvider name="Title" rules="required" v-slot="{ errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <CInput
                v-model="movie.title"
                label="Movie title"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Category" rules="required" v-slot="{ errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <CSelect
                :value.sync='movie.category_id'
                label="Category"
                horizontal
                :options="categoriesSelect"
                placeholder="Please select"
            />
          </ValidationProvider>
          <ValidationProvider name="Author" rules="required" v-slot="{ errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <CInput
                v-model="movie.author"
                label="Author"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Description" rules="required" v-slot="{ errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <CTextarea
                v-model="movie.description"
                label="Description"
                placeholder="Content..."
                horizontal
                rows="9"
            />
          </ValidationProvider>
          <ValidationProvider name="Trailer" rules="required" v-slot="{ errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <CInput
                v-model="movie.trailer"
                label="Trailer"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Release date" rules="required" v-slot="{ errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <CInput
                v-model="movie.release_date"
                label="Release date"
                type="date"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Picture" rules="required|image" v-slot="{ validate, errors }">
            <span class="alert-warning">{{ errors[0] }}</span>
            <div class="custom-file">
              <input
                  v-on:change="handleFileUpload()"
                  @change="validate"
                  type="file"
                  class="custom-file-input"
                  id="picture"
                  ref="picture"
              >
              <label class="custom-file-label" for="picture">Choose picture</label>
            </div>
          </ValidationProvider>
          <hr>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-check-circle"/>
            Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban"/>
            Reset
          </CButton>
        </CForm>
      </ValidationObserver>
    </CCardBody>
  </CCard>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      movie: this.newMovieObject()
    }
  },
  created() {
    this.$store.dispatch('category/fetchCategories')
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.createMovie()
        this.movie = this.newMovieObject()
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    reset() {
      this.movie = this.newMovieObject()
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    handleFileUpload() {
      this.movie.picture = this.$refs.picture.files[0];
    },
    createMovie() {
      const formData = new FormData();
      formData.append('title', this.movie.title)
      formData.append('category_id', this.movie.category_id)
      formData.append('author', this.movie.author)
      formData.append('description', this.movie.description)
      formData.append('trailer', this.movie.trailer)
      formData.append('release_date', this.movie.release_date)
      formData.append('picture', this.movie.picture)
      this.$store.dispatch('movie/createMovie', formData)
    },
    newMovieObject() {
      return {
        title: '',
        category_id: '',
        author: '',
        description: '',
        trailer: '',
        release_date: '',
        picture: ''
      };
    }
  },
  computed: {
    categoriesSelect() {
      return this.categories.map(item => {
        return {value: item.id, label: item.name}
      })
    },
    ...mapState({categories: state => state.category.categories})
  },
}
</script>

<style scoped>
span {
  display: block;
}
</style>