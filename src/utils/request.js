/*
 * @Author: your name
 * @Date: 2022-04-28 15:49:39
 * @LastEditTime: 2022-04-28 16:07:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \express-vue\src\utils\request.js
 */
import axios from "axios";
// 消息提醒 antd
import { message } from "ant-design-vue";
// 引入全局配置
axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 在请求发送之前做一些事情
        return config;
    }
    // ,
    // (error) => {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    // }
);
// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        return response;
    }
    // ,
    // (error) => {
    //     // 对响应错误做点什么
    //     return Promise.reject(error);
    // }
);
// 封装axios
export default {
    // 获取数据
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params,
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    delete(url, data) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    put(url, data) {
        return new Promise((resolve, reject) => {
            axios
                .put(url, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};