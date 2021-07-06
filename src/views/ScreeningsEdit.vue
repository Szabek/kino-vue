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
  data() {
    return {
      screening: '',
      movieModal: false,
      page: 1,
      fields: [
        {
          key: 'title',
          label: 'Title'
        },
        {
          key: 'author',
          label: 'Author'
        },
        {
          key: 'categoryName',
          label: 'Category'
        },
        {
          key: 'pick_movie',
          label: '',
          _style: 'width:1%',
          sorter: false,
          filter: false
        },
      ],
      details: [],
      loading: false,
      currentAlertCounter: 0
    }
  },
  mounted() {
    /* screeningApi.getScreening(this.id)
     .then(response => {
       this.screening = response.data.data
     })*/
    this.screening = this.$store.getters["screening/getScreeningById"](this.id);

  },
}
</script>

<style scoped>

</style>