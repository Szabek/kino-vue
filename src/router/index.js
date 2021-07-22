import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/login-admin',
            name: 'login',
            component: () => import('@/views/admin/auth/LoginAdmin')
        },
        {
            path: '/login-user',
            name: 'login',
            component: () => import('@/views/admin/auth/LoginAdmin')
        },
        {
            path: '/register-user',
            name: 'login',
            component: () => import('@/views/admin/auth/LoginAdmin')
        },
        {
            path: '/page404',
            name: 'Page404',
            component: () => import('@/views/codeStatusPages/Page404')
        },
        {
            path: '/page500',
            name: 'Page500',
            component: () => import('@/views/codeStatusPages/Page500')
        },
        {
            path: '/admin',
            redirect: {name: "Dashboard"},
            name: 'Home',
            component: () => import('@/containers/TheContainer'),
            meta: {requiresAuth: true},
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: () => import('@/views/admin/Dashboard')
                },
                {
                    path: 'movies',
                    name: 'Movies',
                    component: () => import('@/views/admin/Movies')
                },
                {
                    path: 'movies/:id/edit',
                    name: 'Movies-edit',
                    component: () => import('@/views/admin/MoviesEdit'),
                    props: true
                },
                {
                    path: 'rooms',
                    name: 'Rooms',
                    component: () => import('@/views/admin/Rooms')
                },
                {
                    path: 'categories',
                    name: 'Categories',
                    component: () => import('@/views/admin/Categories')
                },
                {
                    path: 'screenings/add',
                    name: 'Screenings-add',
                    component: () => import('@/views/admin/ScreeningsAdd')
                },
                {
                    path: 'screenings/show',
                    name: 'Screenings-show',
                    component: () => import('@/views/admin/ScreeningsShow')
                },
                {
                    path: 'screenings/:id/edit',
                    name: 'Screenings-edit',
                    component: () => import('@/views/admin/ScreeningsEdit'),
                    props: true
                },
            ]
        }
    ]
}

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/login-admin')
    }

    next()
})

export default router





