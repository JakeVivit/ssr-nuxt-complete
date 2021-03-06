import Vue from 'vue'
import * as types from './mutation-types'

export default {
    [types.SET_USER](state, data) {
        state.Authorization = data; 
    },
    [types.GET_USER](state, data){
        state.userInfo = data;
    },
    [types.CLEAR_USER](state, data) {
        state.Authorization = data;
    }
}

