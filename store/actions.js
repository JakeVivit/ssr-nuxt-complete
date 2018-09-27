
import * as types from './mutation-types'

export default {

    nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.accessToken) {
            commit(types.SET_USER, req.session.accessToken)
        }
    },

    async setUser( { commit }, data) {
        console.log(44444)
        try {
            const res = await this.$axios.$post('/api/login', data)
            commit(types.SET_USER, res.data)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
        console.log(55555)
    },

    async getUser({commit}) {
        console.log(22222)
        const data = await this.$axios.$get('https://b.zhulogic.com/designer_api/user/info')
        commit(types.GET_USER, data.data);
        console.log(33333)
    },

    async logout({commit}) {
        await this.$axios.$post.apply('api/logout');
        commit(types.CLEAR_USER, null);  
        commit(types.SET_USER, null)
        this.$router.push({path: '/home'});
    }
}

