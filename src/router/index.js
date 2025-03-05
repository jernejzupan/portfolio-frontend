import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work-with-me',
      name: 'work-with-me',
      component: () => import('../views/WorkWithMeView.vue')
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: () => import('../views/ShowcaseView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demos/feedback-machine',
      name: 'feedback-machine',
      component: () => import('../views/DemoFeedbackMachineView.vue')
    }
  ]
})

export default router
