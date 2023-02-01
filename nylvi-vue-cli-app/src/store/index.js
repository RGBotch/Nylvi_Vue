import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    products:[],
    artistes:[],
    users:[],
    tailles:[],
    categories:[],
    posts:[],
    paniers:[],
    token: null
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setArtistes(state, artistes) {
      state.artistes = artistes;
    },
    setTailles(state, tailles) {
      state.tailles = tailles;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    }
  },
  actions: {
    fetchProducts({ commit }) {
      const apiUrl = 'http://127.0.0.1:8000/api/products?limit=${limit}';
      fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
          commit('setProducts', products[0]);
        });
    },
    fetchArtistes({ commit }) {
      const apiUrl = 'http://127.0.0.1:8000/api/artistes';
      fetch(apiUrl)
          .then(response => response.json())
          .then(artistes => {
            commit('setArtistes', artistes[0]);
          });
    },
    fetchTailles({ commit }) {
      const apiUrl = 'http://127.0.0.1:8000/api/tailles';
      fetch(apiUrl)
          .then(response => response.json())
          .then(tailles => {
            commit('setTailles', tailles[0]);
          });
    },
    fetchCategories({ commit }) {
      const apiUrl = 'http://127.0.0.1:8000/api/categories';
      fetch(apiUrl)
          .then(response => response.json())
          .then(categories => {
            commit('setCategories', categories[0]);
          });
    },
  },
  getters: {
  }
})
