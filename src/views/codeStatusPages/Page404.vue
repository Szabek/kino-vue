<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="w-100 justify-content-center">
      <CCol md="6">
        <div class="w-100">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Oops! You're lost.</h4>
            <p class="text-muted">The page you are looking for was not found.</p>
            <router-link :to="{ name: 'Home'}">
              <CButton color="secondary">
                <h1 class="text-primary">
                  HOME PAGE
                </h1>
              </CButton>
            </router-link>
          </div>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>

</script>
