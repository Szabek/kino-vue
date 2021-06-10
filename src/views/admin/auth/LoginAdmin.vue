<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <ValidationObserver v-slot="{ handleSubmit }">
                  <CForm @submit.prevent="handleSubmit(login)">
                    <h1>Login</h1>
                    <p class="text-muted">Sign In to your account</p>
                    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                      <span class="alert-warning">{{ errors[0] }}</span>
                      <CInput
                          placeholder="Email"
                          autocomplete="username email"
                          v-model="email"
                      >
                        <template #prepend-content>
                          <CIcon name="cil-user"/>
                        </template>
                      </CInput>
                    </ValidationProvider>
                    <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                      <span class="alert-warning">{{ errors[0] }}</span>
                      <CInput
                          placeholder="Password"
                          type="password"
                          autocomplete="current-password"
                          v-model="password"
                      >
                        <template #prepend-content>
                          <CIcon name="cil-lock-locked"/>
                        </template>
                      </CInput>
                    </ValidationProvider>
                    <CRow>
                      <CCol col="6" class="text-left">
                        <CButton type="submit" color="primary" class="px-4">Login</CButton>
                      </CCol>
                      <CCol col="6" class="text-right">
                        <CButton color="link" class="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </ValidationObserver>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login() {
      this.$store
          .dispatch('auth/login', {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push({name: 'Home'})
          })
          .catch(err => {
            this.error = err.response.data.error
          })
    }
  }
}
</script>

<style scoped>
span {
  display: block;
}
</style>