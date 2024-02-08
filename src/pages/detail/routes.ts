export default [
  {
    path: 'detail/:movie_id',
    name: 'detail',
    meta: {
      title: 'Detail'
    },
    component: () => import('./DetailPage.vue')
  }
]
