export default [
  {
    path: 'home',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: () => import('./HomePage.vue')
  }
]
