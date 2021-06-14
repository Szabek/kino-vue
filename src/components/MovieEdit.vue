<template>
  <CCard>
    <CCardHeader>
      <strong>Edit Movie</strong>
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
export default {
  data() {
    return {
      movie: ''
    }
  },
  methods: {
    onSubmit() {


    },
    reset() {

    }
  }
}
</script>

<style scoped>

</style>