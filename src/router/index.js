/* 
 * @Author       : Eug
 * @Date         : 2021-11-22 11:12:01
 * @LastEditTime : 2021-11-23 12:11:19
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path:'/',
    name:'layout',
    component:() => import('/@/layout/index.vue'),
    redirect: 'news',
    children:[
      {
        path: 'news',
        name: 'news',
        meta: { keepAlive: true },
        component: () => import('/@/views/news/index.vue')
      },
      {
        path: 'hot',
        name: 'hot',
        meta: { keepAlive: true },
        component: () => import('/@/views/hot/index.vue')
      },
      {
        path: 'interface',
        name: 'interface',
        meta: { keepAlive: true },
        component: () => import('/@/views/interface/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: { keepAlive: true },
        component: () => import('/@/views/user/index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', component: () => import('/@/views/NotFound/index.vue') }
]

const rotuer = createRouter({
  history: createWebHashHistory(),
  routes
})

export default rotuer