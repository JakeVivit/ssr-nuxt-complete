
import * as types from './mutation-types'

export default {

    nuxtServerInit({ commit, dispatch }, { req }) {
        if (req.session && req.session.accessToken) {
            commit(types.SET_USER, req.session.accessToken);
            dispatch('getUser')
        }
    },

    async setUser( { commit }, data) {
        try {
            const res = await this.$axios.$post('/api/login', data) || null
            commit(types.SET_USER, res)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    },

    async getUser({commit}) {
        const data = await this.$axios.$get('https://b.zhulogic.com/designer_api/user/info')
        commit(types.GET_USER, data.data);
    },

    async logout({commit}) {
        await this.$axios.$post.apply('api/logout');
        commit(types.CLEAR_USER, null);  
        commit(types.SET_USER, null)
        this.$router.push({path: '/home'});
    }
}

