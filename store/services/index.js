import { serviceCol } from '@/services/firebase'

export const state = () => ({
  services: [],
  service: {},
})

export const mutations = {
  setServices(state, val) {
    if (val) {
      state.services = val
    } else {
      state.services = []
    }
  },
  setService(state, val) {
    if (val) {
      state.service = val
    } else {
      state.service = []
    }
  },
  clearService(state) {
    state.service = null
  },
}

export const actions = {
  setService({ commit }, slug) {
    return new Promise((resolve, reject) => {
      serviceCol
        .where('slug', '==', slug)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            const post = doc.data()
            post.id = doc.id
            commit('setService', post)
            resolve(post)
          })
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  setServices({ commit }) {
    serviceCol.orderBy('createdOn').onSnapshot((querySnapshot) => {
      const postsArray = []

      querySnapshot.forEach((doc) => {
        const post = doc.data()
        post.id = doc.id
        postsArray.push(post)
      })
      commit('setServices', postsArray)
    })
  },
}

export const getters = {
  service(state) {
    return state.service
  },
  services(state) {
    return state.services
  },
}
