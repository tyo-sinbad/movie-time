export default [
  {
    path: 'movie',
    name: 'movie',
    meta: {
      title: 'Movie'
    },
    component: () => import('./MoviePage.vue')
  }
]
