const routes = [
    {
        path: '/',
        component: () => import('layouts/LayoutLogin.vue'),
        children: [
            {
                path: '/',
                component: () => import('pages/Login.vue')
            }
        ]
    },

    {
        path: '/app',
        component: () => import('layouts/Layout.vue'),
        children: [
            {
                path: '/members',
                component: () => import('pages/Members.vue')
            },
            {
                path: '/meetings',
                component: () => import('pages/Meetings.vue')
            },
            {
                path: '/attendance',
                component: () => import('pages/Attendance.vue')
            }
        ]
    },
    {
        path: '/app',
        component: () => import('layouts/LayoutAdmin.vue'),
        children: [
            {
                path: '/admin',
                component: () => import('pages/Admin.vue')
            }

            //  {
            //     path: '/attendance',
            //     component: () => import('pages/Attendance.vue')
            //  }
        ]
    }
]

if (process.env.MODE != 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
