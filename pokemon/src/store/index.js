import Vue from "vue"
import Vuex from "vuex"

let store = null

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    namespaced: true,
    name: "global",
    state: { answer: 42 },
  })

  store = Store

  return Store
}

export {store}
