import { createStore } from 'vuex'
import axios from 'axios'

import data from '../assets/Data/data.json'
import ApiGet from '../assets/api/apiroutes'

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

            console.log(state.staticData.categories)
        },
        ADD_TO_MAIN: (state, dataObj) => {
            state.main.push(dataObj)
        },
        ADD_TO_CASES: (state, dataObj) => {
            // Since Templates will check data even if the full array exists, then it has to replace the old array with the new every time.
            state.cases = dataObj
        },
        RESIZE_WINDOW: (state) => {
            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            state.windowWidth = window.innerWidth;
        },
    },
    actions: {
        async loadSinglePost({ commit }, payload) {
            console.log("POST")
            /* 
                Inspiration from: https://medium.com/js-dojo/vuex-tip-error-handling-on-actions-ee286ed28df4
            */
            // Await for the answer from axios, then use that data in post and commit it if there was no error.
            const getRequest = await axios.get(ApiGet.byId(payload));
            const post = getRequest.data;

            // - If there is an error, it could be a code:200 but something still went wrong, and we get an empty array then we don't want to commit.
            // - *It could be that there were some issues with the Query Parameters.
            // -- *It might be unessary..
            if (!post.length) {
                commit("ADD_TO_MAIN", post);
            }
        },
        async loadAll({ commit }, payload) {
            /* 
                Inspiration from: https://medium.com/js-dojo/vuex-tip-error-handling-on-actions-ee286ed28df4
            */
            // Await for the answer from axios, then use that data in post and commit it if there was no error.
            let getRequest;
            if(payload === 0) {
                getRequest = await axios.get(ApiGet.allCases);
            } else if (payload === 1) {
                getRequest = await axios.get(ApiGet.allDesigns);
            }
            const posts = getRequest.data;
            console.log("%c actions: loadAllCases", "background-color: blue; color: white;", posts)

            commit("ADD_TO_CASES", posts);
        },
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
