<template>
  <div class="py-5">
    <CContainer fluid class="container">
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <ValidationObserver v-slot="{ handleSubmit }">
                <CForm @submit.prevent="handleSubmit(register)">
                  <h1>Register</h1>
                  <p class="text-muted">Create your account</p>
                  <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                    <div class="alert-warning">{{ errors[0] }}</div>
                    <CInput
                        placeholder="Email"
                        autocomplete="email"
                        prepend="@"
                        v-model="email"
                    />
                  </ValidationProvider>
                  <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                    <div class="alert-warning">{{ errors[0] }}</div>
                    <CInput
                        placeholder="Name"
                        autocomplete="name"
                        v-model="name"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-user"/>
                      </template>
                    </CInput>
                  </ValidationProvider>
                  <ValidationProvider name="Surname" rules="required" v-slot="{ errors }">
                    <div class="alert-warning">{{ errors[0] }}</div>
                    <CInput
                        placeholder="Surname"
                        autocomplete="surname"
                        v-model="surname"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-user"/>
                      </template>
                    </CInput>
                  </ValidationProvider>
                  <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                    <div class="alert-warning">{{ errors[0] }}</div>
                    <CInput
                        placeholder="Password"
                        type="password"
                        autocomplete="new-password"
                        v-model="password"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-lock-locked"/>
                      </template>
                    </CInput>
                  </ValidationProvider>
                  <ValidationProvider name="Password confirmation" rules="required|confirmed:Password"
                                      v-slot="{ errors }">
                    <div class="alert-warning">{{ errors[0] }}</div>
                    <CInput
                        placeholder="Repeat password"
                        type="password"
                        autocomplete="new-password"
                        class="mb-4"
                        v-model="passwordConfirmation"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-lock-locked"/>
                      </template>
                    </CInput>
                  </ValidationProvider>
                  <CButton type="submit" color="success" block>Create Account</CButton>
                </CForm>
              </ValidationObserver>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCardBody>
                  <h4>Already have an account?</h4>
                  <router-link :to="{ name: 'Login-user' }">
                    <CButton color="secondary">
                      Sign In
                    </CButton>
                  </router-link>
                </CCardBody>
              </CRow>
            </CCardFooter>
          </CCard>
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
      name: '',
      surname: '',
      password: '',
      passwordConfirmation: '',
      error: null
    }
  },
  methods: {
    register() {
      this.$store
          .dispatch('authUser/register', {
            email: this.email,
            name: this.name,
            surname: this.surname,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          })
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => {
            this.error = err.response.data.error
          })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
