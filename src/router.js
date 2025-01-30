import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Society from './pages/Society.vue'
import Events from './pages/Events.vue'
import Team from './pages/Team.vue'
import Conference from './pages/conference/Conference.vue'
import Conference_2024 from './pages/conference/2024.vue'
import Contact from './pages/Contact.vue'
import Error from './pages/Error.vue'
import Signature from './pages/other/signature.vue'
import Partners from './pages/Partners.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/society',
    name: 'Society',
    component: Society,
  },
  {
    path : '/events',
    name : "Events",
    component : Events
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
    path : "/conference/2024",
    name : "Conference 2024",
    component : Conference_2024
  },
  {
    path : "/contact",
    name : "Contact",
    component : Contact
  },
  {
    path : "/partners",
    name : "Partners",
    component : Partners
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error
  },
  {
    path: '/other/signature',
    name: 'Signature',
    component: Signature
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