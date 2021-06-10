import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/template/theme/Colors')
const Typography = () => import('@/views/template/theme/Typography')

const Charts = () => import('@/views/template/charts/Charts')
const Widgets = () => import('@/views/template/widgets/Widgets')

// Views - Components
const Cards = () => import('@/views/template/base/Cards')
const Forms = () => import('@/views/template/base/Forms')
const Switches = () => import('@/views/template/base/Switches')
const Tables = () => import('@/views/template/base/Tables')
const Tabs = () => import('@/views/template/base/Tabs')
const Breadcrumbs = () => import('@/views/template/base/Breadcrumbs')
const Carousels = () => import('@/views/template/base/Carousels')
const Collapses = () => import('@/views/template/base/Collapses')
const Jumbotrons = () => import('@/views/template/base/Jumbotrons')
const ListGroups = () => import('@/views/template/base/ListGroups')
const Navs = () => import('@/views/template/base/Navs')
const Navbars = () => import('@/views/template/base/Navbars')
const Paginations = () => import('@/views/template/base/Paginations')
const Popovers = () => import('@/views/template/base/Popovers')
const ProgressBars = () => import('@/views/template/base/ProgressBars')
const Tooltips = () => import('@/views/template/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/template/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/template/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/template/buttons/Dropdowns')
const BrandButtons = () => import('@/views/template/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/template/icons/CoreUIIcons')
const Brands = () => import('@/views/template/icons/Brands')
const Flags = () => import('@/views/template/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/template/notifications/Alerts')
const Badges = () => import('@/views/template/notifications/Badges')
const Modals = () => import('@/views/template/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/template/pages/Page404')
const Page500 = () => import('@/views/template/pages/Page500')
const Login = () => import('@/views/admin/auth/LoginAdmin')
const Register = () => import('@/views/admin/auth/RegisterAdmin')

// Users
const Users = () => import('@/views/template/users/Users')
const User = () => import('@/views/template/users/User')

//My Views
const Categories = () => import('@/views/Categories')

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/categories',
          name: 'Categories',
          component: Categories
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
            {
              path: 'brands',
              name: 'Brands',
              component: Brands
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    }
  ]
}

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  }

  next()
})

export default router





