import { createStore } from 'vuex'
import axios from 'axios'

import data from '../assets/Data/data.json'

/* 
    NOTE TO SELF:
    #1 - Use COMMIT for Mutations, and DISPATCH for Actions.
*/

export default createStore({
    // state stores the variables (analogous to 'data' in the vue options object)
    state() {
        return {
            //Used to know what the width of the screen is at the moment, and will update on resize from the use of the mutation (RESIZE_WINDOW).
            windowWidth: window.innerWidth,
            
            nav: [],
            api_data: [],
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
        SET_STATIC_DATA: (state) => {
            const
                //Set up arrays from the data.json with all the static data
                nav = data.data_nav,
                categories = data.data_wp_categories,
                tags = data.data_wp_tags;
            //Add Static data to state from data.json
            state.nav = nav;
            state.categories = categories;
            state.tags = tags;
        },
        ADD_TO_APIDATA: (state, dataObj) => {
            state.api_data.push(dataObj)
        },
        GET_AXIOS: (state, payload) => {
            axios
                .get(payload)
                .then((response) => {
                    state.api_data.push(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        RESIZE_WINDOW: (state) => {
            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            state.windowWidth = window.innerWidth;
        },
    },
    // actions are for async calls and functions that may have different mutations as outcome
    actions: {
        GET_API_DATA: (context, payload) => {
            // checkState is to know if the object exist in the state.api_data, and if / if not change the AXIOS GET string to match the result.
            let checkState = undefined,
                getString = undefined;
            if (payload.id) {
                checkState = context.state.api_data.find(object => object.id == payload.id);
                getString = "https://skole.aenders.dk/wp-json/wp/v2/posts/" + payload.id + "?status=publish&per_page=50";
            } else {
                checkState = context.state.api_data.find(object => object.slug == payload.slug);
                getString = "https://skole.aenders.dk/wp-json/wp/v2/posts?status=publish&per_page=50&slug=" + payload.slug;
            }
            console.log("%c PAYLOAD TYPE ", "background-color: red;", checkState, getString)
            if(!checkState) {
                console.log("!Checkstate")
                context.commit("GET_AXIOS", getString);
            }
        },
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
