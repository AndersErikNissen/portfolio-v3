import { createStore } from 'vuex'

import data from '../assets/Data/data.json'

//1 The plan: get Homepage first
//- load() will get the homepage data from WordPress 
//2 After loading a page the first time, store that object in store,
//3 Then reuse it the next time visiting that page

export default createStore({
    // state stores the variables (analogous to 'data' in the vue options object)
    state() {
        return {
            //Used to know what the width of the screen is at the moment, and will update on resize from the use of the mutation (RESIZE_WINDOW).
            windowWidth: window.innerWidth,
            
            nav: [],
            categories: [],
            tags: [],
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
        SET_CATEGORIES: (state, categoriesArray) => {
            state.categories = categoriesArray;
        },
        SET_TAGS: (state, tagsArray) => {
            state.tags = tagsArray;
        },
        ADD_APIDATA: (state, obj) => {
            const
            findNAVitem = state.nav.find(item => item.title == obj.WPinfo.title);

            if(findNAVitem) {
                findNAVitem.content = obj.content;
            }
            console.log("%c Check Nav","background-color: red;", state.nav)
        },
        RESIZE_WINDOW: (state) => {
            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            state.windowWidth = window.innerWidth;
        },
    },
    // actions are for async calls and functions that may have different mutations as outcome
    actions: {
        // load() fetches the data from API
        LOAD_NAV: (context) => {
            const 
            //Set up a array from the data.json with all the global data, here the data_nav
            nav = data.data_nav;
            //Use the a mutation to update our state.nav array from the data.json.
            context.commit('SET_NAV', nav);
        },
        LOAD_WP_DATA: (context) => {
            const 
            categories = data.data_wp_categories,
            tags = data.data_wp_tags;
            //Use the a mutation to update our state.nav array from the data.json.
            context.commit('SET_CATEGORIES', categories);
            context.commit('SET_TAGS', tags);
        },
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
