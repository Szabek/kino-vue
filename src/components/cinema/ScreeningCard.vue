<template>
  <div>
    <b-card img-left class="screening-card mb-3 mx-auto">
      <b-row>
        <b-col>
          <a>
            <b-img :src="STORAGE_URL + screening.movie.picture_source" width="160"
                   rounded alt="Rounded image"></b-img>
          </a>
          <img @click="modalShow = !modalShow" class="play-button" src="../../../public/img/icons/play-button.png" alt="play-button">
          <b-modal v-model="modalShow" centered size="lg" :title="screening.movie.title">
            <div>
              <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="screening.movie.trailer"
                  allowfullscreen
              ></b-embed>
            </div>
            <template #modal-footer>
              <hr>
            </template>
          </b-modal>
        </b-col>
        <b-col md="6">
          <h2>{{ screening.movie.title }}</h2>
          <span>{{screening.movie.category.name}} | {{screening.movie.author}}</span>
          <article class="pt-3">
            {{screening.movie.description}}
          </article>
          <div class="pt-3">
            <b-button
                class="screening-card-button"
                v-for="screening  in screenings" :key="screening.id"
                @click="pickScreening(screening.id)">
              {{ getTime(screening.start_time) }}
            </b-button>
          </div>
        </b-col>
        <b-col cols="0" lg="2">
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import {STORAGE_URL} from "@/constants";

export default {
  props: {
    screenings: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      STORAGE_URL: STORAGE_URL,
      modalShow: false
    }
  },
  computed: {
    screening() {
      return this.screenings[0]
    }
  },
  methods: {
    getTime(dateTime) {
      const date = new Date(dateTime)
      return date.toLocaleTimeString([], {timeStyle: 'short'});
    },
    pickScreening(screeningId) {
      console.log(screeningId)
    }
  }
}
</script>

<style lang="scss" scoped>



.screening-card-button {
  background-color: rgb(255, 140, 0);
  color: rgb(10, 10, 10);
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 5px;

  &:hover {
    transition: 0.3s;
    background-color: rgb(125, 72, 0);
  }
}

.play-button {
  position: absolute;
  margin-left: -130px;
  margin-top: 90px;

  &:hover {
    border-radius: 50%;
    background-color: rgba(40, 40, 40, 0.5);
  }
}

@media (max-width: 767px) {
  .screening-card {
    width: 100%;
  }
}
</style>
