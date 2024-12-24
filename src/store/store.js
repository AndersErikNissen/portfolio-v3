import { createStore } from 'vuex'
import axios from 'axios'

import data from '../assets/Data/data.json';
import ApiGet from '../assets/api/apiroutes';

import noApiPages from "../assets/Data/content_data/all_pages.json";
import noApiCases from "../assets/Data/content_data/all_cases.json";
import allBonusInformation from "../assets/Data/content_data/all_bonus_information.json";

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
                some: [],
                universal: {}
            },

            // The new data for NO-API
            main: {},
            cases: [],
            techs: [],
            roles: []
        }
    },
    getters: {
        // getCaseRoles: ( state ) => ( slug ) => {}
    },
    mutations: {
        SET_NEW_DATA: ( state ) => {

            // Pages 
            state.main = noApiPages;

            // Cases
            state.cases = noApiCases;

            // Technologies
            state.techs = allBonusInformation.technologies;
            
            // Roles
            state.roles = allBonusInformation.roles;

        },

        SET_STATIC_DATA: (state) => {
            const
                //Set up arrays from the data.json with all the static data
                nav = data.data_nav,
                categories = data.data_wp_categories,
                soMe = data.data_soMe,
                tags = data.data_wp_tags,
                uni = data.universal;
            //Add Static data to state from data.json
            state.staticData.nav = nav;
            state.staticData.categories = categories;
            state.staticData.tags = tags;
            state.staticData.soMe = soMe;
            state.staticData.universal = uni;
        },
        ADD_TO_MAIN: (state, dataObj) => {
            state.main.push(dataObj)
        },
        ADD_TO_CASES: (state, dataObj) => {
            // Since Templates will check data even if the full array exists, then it has to replace the old array with the new every time.
            state.cases = dataObj
        },
        ADD_TO_DESIGNS: (state, dataObj) => {
            // Since Templates will check data even if the full array exists, then it has to replace the old array with the new every time.
            state.designs = dataObj
        },
        RESIZE_WINDOW: (state) => {
            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            state.windowWidth = window.innerWidth;
        },
    },
    actions: {
        async loadSinglePost({ commit }, payload) {
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
                const posts = getRequest.data;
                commit("ADD_TO_CASES", posts);

                console.log("%c actions: loadAll: Result", "background-color: blue; color: white;", posts)
            } else if (payload === 1) {
                getRequest = await axios.get(ApiGet.allDesigns);
                const posts = getRequest.data;
                commit("ADD_TO_DESIGNS", posts);
                
                console.log("%c actions: loadAll: Result", "background-color: blue; color: white;", posts)
            }
            
        },
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
