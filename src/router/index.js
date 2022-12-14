import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
  path:"/login",
  component:()=>import("@/views/Login.vue"),
  name:"login"
},
{
  path:"/",
  redirect:"/login"
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
