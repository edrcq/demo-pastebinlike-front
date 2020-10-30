import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import swal from 'sweetalert'

const axios = Axios.create({
  baseURL: 'http://localhost:8091'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    latests: [],
    lastBySlug: {
      title: '',
      content: '',
      createdAt: '',
      owner: {
        name: ''
      }
    }
  },
  mutations: {
    latests(state, list) {
      state.latests = list
    },
    lastBySlug(state, paste) {
      state.lastBySlug = paste
    }
  },
  actions: {
    initStore({ dispatch, commit }) {
      dispatch('getLatests')
    },

    getLatests({ commit }) {
      axios.get('/latest-pastes')
        .then(({ data }) => {
          console.log(data)
          commit('latests', data.pastes)
        })
        .catch(err => {
          swal({ title: 'Error occured', text: 'Cannot fetch latest-pastes', icon: 'danger' })
          console.error(err)
        })
    },

    async getBySlug({ commit }, slug) {
      const { data } = await axios.get(`/p/${slug}`)
      commit('lastBySlug', data)
      return data
    },

    async createPaste(context, paste) {
      const { data } = await axios.post('/new-paste', paste)
      context.dispatch('getLatests')
      return data
    }
  },
  modules: {
  }
})

export default store
