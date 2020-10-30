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
      createdAt: new Date(),
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
        .then((res) => {
          const data = res.data
          console.log(data)
          commit('latests', data.pastes)
        })
        .catch(err => {
          swal({ title: 'Error occured', text: 'Cannot fetch latest-pastes', icon: 'error' })
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
    },

    async login({ commit }, { email, password }) {
      const { data } = await axios.post('/login', {
        email, password
      })

      if (!data.error) {
        axios.defaults.headers.common['Authorization'] = data.authToken;
        return true
      }
      return false



    },

    async signup({ dispatch, commit }, { email, password, pseudo }) {

      try {
        const { data } = await axios.post('/signup', {
          email, password, pseudo
        })

        if (!data.error) {
          return dispatch('login', { email, password })
        }
        swal({ title: 'Signup error', text: data.error })
      }
      catch (err) {
        swal({ title: 'Signup FATAL error', text: err.message })
        console.error(err)
      }

    }
  },
  modules: {
  }
})

export default store
