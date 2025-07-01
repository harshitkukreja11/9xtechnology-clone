import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '@/views/Services.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Careers from '@/views/Careers.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/About',
    name:'About',
    component: About

  },
  {
    path:'/Services',
    name:'services',
    component: Services

    
  },
  {
    path:'/Projects',
    name:'projects',
    component: Projects
  },
  {
    path:'/Careers',
    name:'careers',
    component: Careers
  },
  {
    path:'/Contact',
    name:'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})



export default router
