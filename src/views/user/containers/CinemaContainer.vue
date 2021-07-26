<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <NavBar/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <Footer class="mt-auto"/>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Footer from './Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  background-color: rgb(52, 52, 52);
}

</style>
