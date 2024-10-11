import { createRouter, createWebHashHistory } from 'vue-router'
import WelfareComparison from '../views/WelfareComparison.vue'
import About from '../views/About.vue'

export default createRouter({
  // Hash, History
  // Hash: http://localhost:8080/#/about
  history: createWebHashHistory(),
  //pages
  routes: [
    {
      path: '/',
      component: WelfareComparison,
      name: 'WelfareComparison'
    },
    {
      path: '/about',
      component: About,
      name: 'About'
    }
    // {
    //   path: "/comparisonall",
    //   component: WelfareComparisonAll
    // }
  ]
})
