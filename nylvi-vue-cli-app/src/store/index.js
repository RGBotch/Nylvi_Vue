import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    products:[],
    artistes:[],
    utilisateurs:[],
    posts:[],
    paniers:[]
  },
  mutations: {
    // DELETE_PRODUIT(state, panier) {
    //   var index = state.paniers.findIndex(p => p.id == panier.id);
    //   state.paniers.splice(index, 1);
    // },
    setProducts(state, products) {
      state.products = products;
    },
    setArtistes(state, artistes) {
      state.artistes = artistes;
    },
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
  },
  getters: {
  }
})
