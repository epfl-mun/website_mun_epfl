import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Events from './pages/Events.vue'
import EventDetail from './pages/EventDetail.vue'
import Team from './pages/Team.vue'
import Conference from './pages/Conference.vue'
import Conference_2024 from './pages/Conference_2024.vue'
import Contact from './pages/Contact.vue'

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
  },
  {
    path : "/conference",
    name : "Conference",
    component : Conference
  },
  {
    path : "/conference_2024",
    name : "Conference 2024",
    component : Conference_2024
  },
  {
    path : "/contact",
    name : "Contact",
    component : Contact
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