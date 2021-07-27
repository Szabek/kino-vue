<template>
  <div>
    <b-card img-left class="mb-3 w-75 mx-auto">
      <b-row>
        <b-col>

          <a v-b-modal.modal-1>
            <b-img src="http://localhost:8000/storage/uploads/TWkZfsp96rK8ngFJ9PxaLLh7AaCauvONhXYN2XxE.jpg" width="160"
                   rounded alt="Rounded image"></b-img>
          </a>
          <b-modal id="modal-1" centered size="lg" title="Joker">
            <div>
              <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowfullscreen
              ></b-embed>
            </div>
            <template #modal-footer>
              <hr>
            </template>
          </b-modal>
        </b-col>
        <b-col md="6">
          <h2>Joker</h2>
          <span>COMEDY | Todd Phillips</span>
          <article class="pt-2">
            In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.
            He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with
            his alter-ego: the Joker.
          </article>
          <div class="pt-3">
            <b-button class="screening-card-button">14:20</b-button>
          </div>
        </b-col>
        <b-col cols="0" lg="2">
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ScreeningCard"
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
</style>
