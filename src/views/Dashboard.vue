<template>
  <div>
    <WidgetsDropdown/>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Traffic</h4>
            <div class="small text-muted">November 2017</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton color="primary" class="float-right">
              <CIcon name="cil-cloud-download"/>
            </CButton>
            <CButtonGroup class="float-right mr-3">
              <CButton
                  color="outline-secondary"
                  v-for="(value, key) in ['Day', 'Month', 'Year']"
                  :key="key"
                  class="mx-0"
                  :pressed="value === selected ? true : false"
                  @click="selected = value"
              >
                {{ value }}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
        <MainChartExample style="height:300px;margin-top:40px;"/>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="40"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="20"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="60"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="danger"
                :value="80"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <CProgress
                class="progress-xs mt-2"
                :precision="1"
                :value="40"
            />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Traffic &amp; Sales (filmy)
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">New Clients</small><br>
                      <strong class="h4">9,123</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small class="text-muted">Recurring Clients</small><br>
                      <strong class="h4">22,643</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0">
              </CCol>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="warning">
                      <small class="text-muted">Pageviews</small><br>
                      <strong class="h4">78,623</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="success">
                      <small class="text-muted">Organic</small><br>
                      <strong class="h4">49,123</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0">

              </CCol>
            </CRow>
            <br/>
            <CDataTable
                class="mb-0 table-outline"
                hover
                :items="tableItems"
                :fields="tableFields"
                head-color="light"
                no-sorting
            >
              <td slot="avatar" class="text-center" slot-scope="{item}">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="">
                  <span
                      class="c-avatar-status"
                      :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="user" slot-scope="{item}">
                <div>{{ item.user.name }}</div>
                <div class="small text-muted">
                  <span>
                    <template v-if="item.user.new">New</template>
                    <template v-else>Recurring</template>
                  </span> | Registered: {{ item.user.registered }}
                </div>
              </td>
              <td
                  slot="country"
                  slot-scope="{item}"
                  class="text-center"
              >
                <CIcon
                    :name="item.country.flag"
                    height="25"
                />
              </td>
              <td slot="usage" slot-scope="{item}">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{ item.usage.value }}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{ item.usage.period }}</small>
                  </div>
                </div>
                <CProgress
                    class="progress-xs"
                    v-model="item.usage.value"
                    :color="color(item.usage.value)"
                />
              </td>
              <td
                  slot="payment"
                  slot-scope="{item}"
                  class="text-center"
              >
                <CIcon
                    :name="item.payment.icon"
                    height="25"
                />
              </td>
              <td slot="activity" slot-scope="{item}">
                <div class="small text-muted">Last login</div>
                <strong>{{ item.activity }}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from './template/charts/MainChartExample'
import WidgetsDropdown from './template/widgets/WidgetsDropdown'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
  },
  data() {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: {url: 'img/avatars/1.jpg', status: 'success'},
          user: {name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015'},
          country: {name: 'USA', flag: 'cif-us'},
          usage: {value: 50, period: 'Jun 11, 2015 - Jul 10, 2015'},
          payment: {name: 'Mastercard', icon: 'cib-cc-mastercard'},
          activity: '10 sec ago'
        },
        {
          avatar: {url: 'img/avatars/2.jpg', status: 'danger'},
          user: {name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015'},
          country: {name: 'Brazil', flag: 'cif-br'},
          usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
          payment: {name: 'Visa', icon: 'cib-cc-visa'},
          activity: '5 minutes ago'
        },
        {
          avatar: {url: 'img/avatars/3.jpg', status: 'warning'},
          user: {name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015'},
          country: {name: 'India', flag: 'cif-in'},
          usage: {value: 74, period: 'Jun 11, 2015 - Jul 10, 2015'},
          payment: {name: 'Stripe', icon: 'cib-stripe'},
          activity: '1 hour ago'
        },
        {
          avatar: {url: 'img/avatars/4.jpg', status: ''},
          user: {name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015'},
          country: {name: 'France', flag: 'cif-fr'},
          usage: {value: 98, period: 'Jun 11, 2015 - Jul 10, 2015'},
          payment: {name: 'PayPal', icon: 'cib-paypal'},
          activity: 'Last month'
        },
        {
          avatar: {url: 'img/avatars/5.jpg', status: 'success'},
          user: {name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015'},
          country: {name: 'Spain', flag: 'cif-es'},
          usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
          payment: {name: 'Google Wallet', icon: 'cib-google-pay'},
          activity: 'Last week'
        },
        {
          avatar: {url: 'img/avatars/6.jpg', status: 'danger'},
          user: {name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015'},
          country: {name: 'Poland', flag: 'cif-pl'},
          usage: {value: 43, period: 'Jun 11, 2015 - Jul 10, 2015'},
          payment: {name: 'Amex', icon: 'cib-cc-amex'},
          activity: 'Last week'
        }
      ],
      tableFields: [
        {key: 'avatar', label: '', _classes: 'text-center'},
        {key: 'user'},
        {key: 'country', _classes: 'text-center'},
        {key: 'usage'},
        {key: 'payment', label: 'Payment method', _classes: 'text-center'},
        {key: 'activity'},
      ]
    }
  },
  methods: {
    color(value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
