<template>
  <div>
    <b-navbar class="navbar" toggleable="md" type="dark">

      <b-navbar-brand href="/" class="nav-logo">
        <h2>Cinema</h2>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="navbar-items mx-auto">
          <b-nav-item class="border-right" href="#">
            <span>Link</span>
          </b-nav-item>
          <b-nav-item href="#">
            <span>Disabled</span>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-nav v-if="!user">
            <b-nav-item :to="{ name: 'Register-user'}">Register</b-nav-item>
            <b-nav-item :to="{ name: 'Login-user'}">Login</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right v-if="user">
            <template #button-content>
              <em>{{ user.user.name }} {{ user.user.surname }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('authUser', ['user'])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: rgb(40, 44, 53);
}

.nav-logo > h2 {
  color: rgb(255, 140, 0);
}

.navbar-items * {
  color: rgb(255, 140, 0);
  font-weight: bold;
  font-size: 16px;

  &:hover {
    color: rgb(250, 250, 250);
  }
}

</style>
