import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Events from './pages/Events.vue'
import EventDetail from './pages/EventDetail.vue'
import Team from './pages/Team.vue'

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
  },
  {
    path : '/events',
    name : "Events",
    component : Events
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail,
    props: true
  },
  {
    path : '/team',
    name : "Team",
    component : Team
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