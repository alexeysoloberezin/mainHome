export const state = () => ({
  houses: [],
  loading: false
})

export const mutations = {
  setHouses(state, value) {
    state.houses = value
  },
  setHousesLoading(state, value) {
    state.loading = value
  },
}

export const actions = {
  async fetchHouses({commit}) {
    commit('setHousesLoading', true)
    try {
      const snapshot = await this.$fire.firestore.collection('houses').get()
      const houses = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      commit('setHousesLoading', false)
      commit('setHouses', houses)
    } catch (error) {
      console.error('Ошибка при получении домов', error)
      commit('setHousesLoading', false)
    }
  }
}
