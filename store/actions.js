
import * as types from './mutation-types'
import axios from 'axios'

export default {

    nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.accessToken) {
            commit(types.SET_USER, req.session.accessToken)
        }
    },

    async setUser( { commit }, data) {
        try {
            const res = await axios.post('/api/login', data)
            commit(types.SET_USER, res.data)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    },

    async getUser({commit}) {
        const data = await this.$axios.$get('https://b.zhulogic.com/designer_api/user/info')
        commit(types.GET_USER, data.data)
    }
}

