import Vue from 'vue'
import * as types from './mutation-types'

export default {
    [types.SET_USER](state, data) {
        // localStorage.setItem('token', JSON.stringify(data));
        state.Authorization = data; 
    },
    [types.CHECK_LOGIN](state, data) {
        Vue.set(state, 'isLogin', data)
    }
}

