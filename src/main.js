/*
 * @Author: your name
 * @Date: 2022-04-28 14:49:12
 * @LastEditTime: 2022-04-28 15:36:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \express-vue\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
// createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')