import Vue from 'vue'
import store from '~/store/index'

import axios from 'axios';

const ajaxUrl = 'https://b.zhulogic.com';

let http = {};


http.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

console.log(Vue)


http.baseAjaxUrl = ajaxUrl;
//http request
// http.ajax.interceptors.request.use(config => {
//             let accessToken = store.state.accessToken;
//             if (accessToken) {
//                 config.headers.Authorization = accessToken
//             } else {
//                 config.headers.Authorization = 123
//             }
//             return config;
//         },
//         err => {
//             return Promise.reject(err);
//         }
//     )
//     //http response
// http.ajax.interceptors.response.use(response => {
//     switch (response.data.status_code) {
//         case 401:
//             //返回 401 清除token信息并跳转到登录页面
//             this.$router.reject('/login');
//             Vue.$vux.alert.show({
//                 title: '错误提示',
//                 content: response.data.message,
//             })
//             return Promise.reject(response.data);
//             break
//         case 400:
//             Vue.$vux.alert.show({
//                 title: '错误提示',
//                 content: response.data.message,
//             })
//             break;
//         case 500:
//             Vue.$vux.alert.show({
//                 title: '错误提示',
//                 content: '服务器出错了,稍后再试',
//             })
//             return Promise.reject(response.data);
//             break;
//         case 200:
//             return response.data.data;
//             break;
//         default:
//             return {
//                 status_code: response.data.status_code,
//                 data: response.data.data
//             }

//     }
//     return response;
// }, error => {
//     if (error.response) {
//         return Promise.reject(error.response.data) // 返回接口返回的错误信息
//     } else {
//         Vue.$vux.alert.show({
//             title: '错误提示',
//             content: '请求超时,请稍后再试',
//         })
//     }
//     return Promise.reject('timeout')
// })

export default http;