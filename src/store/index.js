import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    pacientes: [
{nombre : 'owen araujo', id: '1'},
{nombre : 'owen araujo', id: '2'},
{nombre : 'owen araujo', id: '3'},
{nombre : 'owen araujo', id: '4'},

    ]

  },
  mutations: {
    buscar(state){
    axios
      .get(`https://api-clinica-test.herokuapp.com/api/persons`)
      .then( response =>(this.state.pacientes = response),
      console.log(response)
      
      )
    }
  },
  actions: {
  },
  modules: {
  }
})
