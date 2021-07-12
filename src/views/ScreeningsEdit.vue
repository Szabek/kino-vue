<template>
  <CContainer v-if="screening">
    <CRow>
      <CCol class="col-12 col-xl-6">
        <ScreeningShow :screening="screening"/>
      </CCol>
      <CCol class="col-12 col-xl-6">
        <ScreeningEdit :screening="screening"/>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import ScreeningEdit from "@/components/screening/ScreeningEdit";
import ScreeningShow from "@/components/screening/ScreeningShow";
import {mapActions} from "vuex";

export default {
  components: {
    ScreeningEdit,
    ScreeningShow
  },
  props: {
    id: {
      required: true,
    }
  },
  computed: {
    screening() {
      return this.$store.getters["screening/getScreeningById"](this.id);
    }
  },
  methods: {
    ...mapActions('screening', [
      'fetchScreening'
    ])
  },
  created() {
    if (!this.$store.state["screening/screenings"]) {
      this.fetchScreening(this.id)
    }
  }
}
</script>

<style scoped>

</style>