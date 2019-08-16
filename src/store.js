import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meats: ['Steak', 'Chicken'],
    veggies: ['Onion', 'Green Pepper'],
    toppings: ['Cheese', 'Sour Cream'],
    complitas: []
  },
  mutations: {
    addMeat (state, meat) {
      state.meats.push(meat)
    },
    addVeggie (state, veggie) {
      state.veggies.push(veggie)
    },
    addTopping (state, topping) {
      state.toppings.push(topping)
    },
    addComplita (state, complita) {
      state.complitas.push(complita)
    }
  },
  actions: {
    addMeat ({commit}, meat) {
      commit('addMeat', meat)
    },
    addVeggie ({commit}, veggie) {
      commit('addVeggie', veggie)
    },
    addTopping ({commit}, topping) {
      commit('addTopping', topping)
    },
    addComplita ({commit}, complita) {
      commit('addComplita', complita)
    }
  }
})
