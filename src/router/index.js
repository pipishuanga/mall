import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
// import Home from '../views/home/Home'
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//  1. 注册
Vue.use(VueRouter)

// 4. 抽离出来  创建路由
// const 
//  2. 使用
const router = new VueRouter({
    mode:'history',
    // base:process.env.BASE_URL,
    routes : [
      {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          // component: () => import('../views/home/Home')
          component: Home
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/profile',
          component: Profile
        }
  ]
})

//  3. 暴露模块
export default router