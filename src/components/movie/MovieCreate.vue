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
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                v-model="movie.title"
                label="Movie title"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Category" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CSelect
                :value.sync='movie.category_id'
                label="Category"
                horizontal
                :options="categoriesSelect"
                placeholder="Please select"
            />
          </ValidationProvider>
          <ValidationProvider name="Author" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                v-model="movie.author"
                label="Author"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Description" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CTextarea
                v-model="movie.description"
                label="Description"
                placeholder="Content..."
                horizontal
                rows="9"
            />
          </ValidationProvider>
          <ValidationProvider name="Trailer" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                v-model="movie.trailer"
                label="Trailer"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Release date" rules="required" v-slot="{ errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <CInput
                v-model="movie.release_date"
                label="Release date"
                type="date"
                horizontal
            />
          </ValidationProvider>
          <ValidationProvider name="Picture" rules="required|image" v-slot="{ validate, errors }">
            <div class="alert-warning">{{ errors[0] }}</div>
            <div class="custom-file">
              <input
                  v-on:change="handleFileUpload()"
                  @change="validate"
                  type="file"
                  class="custom-file-input"
                  id="picture"
                  ref="picture"
              >
              <label class="custom-file-label" for="picture">
                Selected picture: {{ movie.picture ? movie.picture.name : '' }}
              </label>
            </div>
          </ValidationProvider>
          <hr>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-check-circle"/>
            Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger" class="ml-1">
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
      this.$store.dispatch('movie/createMovie', this.movie)
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
    ...mapState('category', ['categories'])
  },
}
</script>

<style scoped>
span {
  display: block;
}
</style>