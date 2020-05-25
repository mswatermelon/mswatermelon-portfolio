export default [
    { path: '/', component: () => import('../pages/About.vue')},
    { path: '/works', component: () => import('../pages/Works.vue')},
    { path: '/reviews', component: () => import('../pages/Reviews.vue')},
    { path: '/login', component: () => import('../pages/Login.vue'), meta: { login: true}},
]
