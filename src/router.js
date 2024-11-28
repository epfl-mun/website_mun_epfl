import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import SubPage from './pages/SubPage.vue'
import EventDetail from './pages/EventDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'subpage',
        name: 'SubPage',
        component: SubPage
      }
    ]
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router