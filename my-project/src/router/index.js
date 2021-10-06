import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import SinglePost from '../views/SinglePost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/article/:id',
    name: 'SinglePost',
    component: SinglePost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



