<template>
  <div>
    <h3 class="pt-4">Add new Category:</h3>
    <CForm @submit.prevent="createCategory">
      <CInput v-model="category.name"
          class="pt-2"
          placeholder="Enter new Category"
      />
      <CButton class="btn-pill" color="success" value="Submit" type="submit">Button</CButton>
    </CForm>
  </div>
</template>

<script>


export default {
  data() {
    return {
      category: this.createCategoryObject()
    }
  },
  methods: {
    createCategory() {
      this.$store
          .dispatch('createCategory', this.category)
          .then(() => {
            console.log(localStorage.getItem('user'))
            this.category = this.createCategoryObject()
          })
    },
    createCategoryObject() {
      return {
        name: '',
      }
    }
  }
}
</script>

<style scoped>

</style>