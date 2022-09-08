import Vue from 'vue'
import VueRouter from 'vue-router'
import ArchiveView from '../views/ArchiveView.vue'
import AdminView from '../views/AdminView.vue'
import PendingCards from '../views/PendingCards.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView
  },
  {
    path: '/pending',
    name: 'pending',
    component: PendingCards
  },

]

const router = new VueRouter({
  routes
})

export default router
