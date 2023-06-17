import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketProducts: []
  },
  getters: {
    basketProducts(state){
      return state.basketProducts
    }
  },
  mutations: {
    PLUS(state, product){
      state.basketProducts.forEach((item) => {
        if(item.id === product.id){
          item.quantity += 1
        }
      })
      state.basketProducts = [...new Set(state.basketProducts)];
    },
    MINUS(state, product){
      state.basketProducts.forEach((item) => {
        if(item.id === product.id && item.quantity > 1){
          item.quantity -= 1
        }else if(item.id === product.id && item.quantity <= 1){
          const index = state.basketProducts.indexOf(product);
          if (index > -1) {
            state.basketProducts.splice(index, 1);
          }
        }
      })
      state.basketProducts = [...new Set(state.basketProducts)];
    },
    SET_TO_BASKET(state, data){
      if(state.basketProducts.length >= 1){
        state.basketProducts.forEach((item) => {
          if(item.id === data.id) {
            item.quantity += 1
          }else{
            state.basketProducts.push(data)
          }
        })
      }else{
        state.basketProducts.push(data)
      }
      state.basketProducts = [...new Set(state.basketProducts)];
    }
  },
  actions: {
    addToBasket({commit}, product) {
      commit('SET_TO_BASKET', product)
    },
    plusQuantity({commit}, product) {
      commit('PLUS', product)
    },
    minusQuantity({commit}, product) {
      commit('MINUS', product)
    }
  },
  modules: {
  }
})
