<template>
  <div class="pt-4">
    <b-card
        :title="screening.movie.title"
        :img-src="STORAGE_URL + screening.movie.picture_source"
        img-alt="Image"
        img-top
    >
      <b-card-text>
        {{screening.movie.description}}
      </b-card-text>
      <template #footer>
        <small class="text-muted">{{screening.movie.author}}</small>
      </template>
    </b-card>
  </div>
</template>

<script>
import {STORAGE_URL} from "@/constants";

export default {
  props: {
    screening: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      STORAGE_URL: STORAGE_URL
    }
  },
}
</script>

<style scoped>

</style>
