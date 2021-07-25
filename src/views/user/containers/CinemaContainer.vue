<template>
  <div class="app-wrapper">
    <NavBar class="test"/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  background-color: rgb(52, 52, 52);
  min-height: 100vh;
}
</style>
