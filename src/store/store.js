import { createStore } from 'vuex'
import axios from 'axios'

import data from '../assets/Data/data.json'

/* 
    NOTE TO SELF:
    #1 - Use COMMIT for Mutations, and DISPATCH for Actions.
*/

export default createStore({
    state() {
        return {
            //Used to know what the width of the screen is at the moment, and will update on resize from the use of the mutation (RESIZE_WINDOW).
            windowWidth: window.innerWidth,

            staticData: {
                nav: [],
                categories: [],
                tags: [],
            },
            main: [],
            cases: [],
        }
    },
    getters: {

    },
    mutations: {
        SET_STATIC_DATA: (state) => {
            const
                //Set up arrays from the data.json with all the static data
                nav = data.data_nav,
                categories = data.data_wp_categories,
                tags = data.data_wp_tags;
            //Add Static data to state from data.json
            state.staticData.nav = nav;
            state.staticData.categories = categories;
            state.staticData.tags = tags;
        },
        ADD_TO_MAIN: (state, dataObj) => {
            state.main.push(dataObj)
        },
        ADD_TO_CASES: (state, dataObj) => {
            state.cases.push(dataObj)
        },
        RESIZE_WINDOW: (state) => {
            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            // Debouncer missing.
            state.windowWidth = window.innerWidth;
        },
    },
    actions: {
        async loadSinglePost({ commit }, payload) {
            /* 
                Inspiration from: https://medium.com/js-dojo/vuex-tip-error-handling-on-actions-ee286ed28df4
            */
            // Await for the answer from axios, then use that data in post and commit it if there was no error.
            const getRequest = await axios.get("https://skole.aenders.dk/wp-json/wp/v2/posts/" + payload + "?status=publish&per_page=50&categories=81");
            const post = getRequest.data;
            console.log("POST", post)
            // - If there is an error, it could be a code:200 but something still went wrong, and we get an empty array then we don't want to commit.
            // - *It could be that there were some issues with the Query Parameters.
            if (!post.length) {
                commit("ADD_TO_MAIN", post);
            }
        },
        async loadAllCases({ commit }) {
            /* 
                Inspiration from: https://medium.com/js-dojo/vuex-tip-error-handling-on-actions-ee286ed28df4
            */
            // Await for the answer from axios, then use that data in post and commit it if there was no error.
            const getRequest = await axios.get("https://skole.aenders.dk/wp-json/wp/v2/posts?status=publish&per_page=50&categories=81");
            const post = getRequest.data;

            // - If there is an error, it could be a code:200 but something still went wrong, and we get an empty array then we don't want to commit.
            // - *It could be that there were some issues with the Query Parameters.
            if (!post.length) {
                commit("ADD_TO_MAIN", post);
            }
        },
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
