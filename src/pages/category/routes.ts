export default [
  {
    path: 'category/:action',
    name: 'category',
    meta: {
      title: 'Category'
    },
    component: () => import('./CategoryPage.vue')
  }
]
