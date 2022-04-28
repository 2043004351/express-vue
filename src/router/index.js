/*
 * @Author: your name
 * @Date: 2022-04-28 15:32:35
 * @LastEditTime: 2022-04-28 15:40:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \express-vue\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})