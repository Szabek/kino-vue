<template>
  <CCardBody>
    <CRow>
      <CCol class="col-auto">
        <h4>{{ name }}</h4>
      </CCol>
      <CCol>
        <DeleteWarning/>
      </CCol>
    </CRow>
    <ValidationObserver v-slot="{ handleSubmit }">
      <CForm @submit.prevent="handleSubmit(updateCategory)">
        <ValidationProvider name="Category" rules="required||alpha_spaces" v-slot="{ errors }">
          <span class="alert-warning">{{ errors[0] }}</span>
          <CInput
              v-model="category.name"
              label="Rename Category:"
          />
        </ValidationProvider>
        <CButton size="sm" color="success" value="Submit" type="submit">
          Rename
        </CButton>
      </CForm>
    </ValidationObserver>
  </CCardBody>
</template>

<script>
import DeleteWarning from "@/components/DeleteWarning";

export default {
  data() {
    return {
      category: {}
    }
  },
  watch: {
    toggled(newValue) {
      if (newValue === true) {
        this.category = this.createCategoryObject()
      }
    }
  },
  methods: {
    updateCategory() {
      this.$store
          .dispatch('category/updateCategory', this.category)
          .then(() => {
            this.category = this.createCategoryObject()
          })
    },
    createCategoryObject() {
      return {
        id: this.id,
        name: this.name
      }
    }
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    toggled: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    DeleteWarning
  },
}
</script>

<style scoped>
span {
  display: block;
}
</style>