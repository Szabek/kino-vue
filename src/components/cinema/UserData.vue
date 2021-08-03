<template>
<div>
  <b-card class="user-data-card mt-3">
    <div>
      <span class="user-data-name">Email:</span>
      {{ user.email }}
    </div>
    <div>
      <span class="user-data-name">Name:</span>
      {{ user.name }}
    </div>
    <div>
      <span class="user-data-name">Surname:</span>
      {{ user.surname }}
    </div>

  </b-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')).user
    }
  },
}
</script>

<style scoped>
.user-data-card {
  font-size: 20px;
}

.user-data-name {
  font-weight: bold;
}

</style>
