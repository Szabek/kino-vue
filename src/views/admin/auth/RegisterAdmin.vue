<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                    placeholder="Name"
                    autocomplete="name"
                >
                  <template #prepend-content>
                    <CIcon name="cil-user"/>
                  </template>
                </CInput>
                <CInput
                    placeholder="Surname"
                    autocomplete="surname"
                >
                  <template #prepend-content>
                    <CIcon name="cil-user"/>
                  </template>
                </CInput>
                <CInput
                    placeholder="Email"
                    autocomplete="email"
                    prepend="@"
                />
                <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="new-password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked"/>
                  </template>
                </CInput>
                <CInput
                    placeholder="Repeat password"
                    type="password"
                    autocomplete="new-password"
                    class="mb-4"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked"/>
                  </template>
                </CInput>
                <CButton color="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCardBody>
                  <h4>Already have an account?</h4>
                  <CButton
                      color="secondary"
                  >
                    Sign In
                  </CButton>
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
  name: 'Register'
}
</script>
