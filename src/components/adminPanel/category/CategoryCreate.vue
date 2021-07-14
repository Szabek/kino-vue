<template>
  <div>
    <h3 class="pt-4 pb-2">Add new Category:</h3>
    <ValidationObserver ref="form">
      <CForm @submit.prevent="onSubmit">
        <ValidationProvider name="Category" rules="required|alpha_spaces" v-slot="{ errors }">
          <div class="alert-warning">{{ errors[0] }}</div>
          <CInput
              v-model="category.name"
              placeholder="Enter new Category"
          />
        </ValidationProvider>
        <CButton class="btn-pill" color="success" type="submit">ADD</CButton>
      </CForm>
    </ValidationObserver>
  </div>
</template>

<script>

export default {
  data() {
    return {
      category: {}
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.createCategory()
        this.category = {};
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    createCategory() {
      this.$store.dispatch('category/createCategory', this.category)
    }
  }
}
</script>

<style scoped>

</style>