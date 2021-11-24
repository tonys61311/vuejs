import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FormSample from '../components/dynamicForm/FormSample.vue'
import DashBoard from '../components/DashBoard.vue'
import Login from '../components/Login.vue'

const routes = [
  // {
  //   path: '/test',
  //   name: 'FormSample',
  //   component: FormSample
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: '模板',
    component: DashBoard,
    children:[
      { 
        path:'dynamicform',
        name: '動態表單',
        component: FormSample,
        meta: { requiresAuth: true }, // 登入控管
      },

    ],
  },
  {
    path: '/login',
    name: '登入測試',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component:About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
