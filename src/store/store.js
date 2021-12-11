import { createStore } from 'vuex'

import dataNav from '../assets/Data/data.json'

//1 The plan: get Homepage first
//- load() will get the homepage data from WordPress 
//2 After loading a page the first time, store that object in store,
//3 Then reuse it the next time visiting that page

export default createStore({
    // state stores the variables (analogous to 'data' in the vue options object)
    state() {
        return {
            nav: []
        }
    },
    // getters do not modify the state, but return values based on some criteria
    // getters are re-evaluated when the state changes (analogous to 'computed' in the vue options object)
    getters: {
      
    },
    // mutations directly manipulate the state (variables), mutations are synchronous!
    mutations: {
        SET_NAV: (state, navArray) => {
            state.nav = navArray;
        },
    },
    // actions are for async calls and functions that may have different mutations as outcome
    actions: {
        // load() fetches the data from API
        load: (context) => {
            const 
            //Set up a array from the data.json with all the global data, here the data_nav
            nav = dataNav.data_nav;
            //Use the a mutation to update our state.nav array from the data.json.
            context.commit('SET_NAV', nav);
        }
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
