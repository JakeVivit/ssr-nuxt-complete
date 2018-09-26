
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions'

const state = {
    Authorization: null,
    userInfo: null,
    user: '',
    isLogin: false
}

const createStore = () => {
    return new Vuex.Store({
        state,
        actions,
        mutations
    })
}

export default createStore