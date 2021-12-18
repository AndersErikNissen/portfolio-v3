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
        CHECK_API_DATA: (state, payload) => {
            // If the payload include an id, it has to use that as part of the .find() otherwise look for a matching slug.
            if (payload.id) {
                return state.api_data.find(object => object.id == payload.id);
            } else {
                return state.api_data.find(object => object.slug == payload.slug);
            }
        },
        RESIZE_WINDOW: (state) => {
            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            state.windowWidth = window.innerWidth;
        },
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
        }
    },
    // actions are for async calls and functions that may have different mutations as outcome
    actions: {
        GET_API_DATA: (context, payload) => {
            // In order to be able to return data when the actions is dispatched, a promise is used. It can also be used since actions are async. 
            // It would also be possible to use .find() to find the data in api_data, but this is a bit more simple.

            console.log("%c PAYLOAD ", "background-color: red;", payload)
            const checkStoreData = context.commit("CHECK_API_DATA", payload);
         

            if (checkStoreData) {
                // If data is found in the store, then give that to the dispatch.
                return checkStoreData;
            } else {
                let string = undefined;
                if (payload.id) {
                    //For views where id is used.
                    string = "https://skole.aenders.dk/wp-json/wp/v2/posts/" + payload.id + "?status=publish&per_page=50";
                } else {
                    //For views where a slug is used.
                    string = "https://skole.aenders.dk/wp-json/wp/v2/posts?status=publish&per_page=50&slug=" + payload.slug;
                }
                console.log("%c AXIOS ","background-color:white;color: pink;",axios.get(string).then((response) => {console.log("then: ", response)}))
                
                axios
                        .get(string)
                        .then((response) => {
                            context.state.api_data.push(response.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });

            }
            
        },
    }
});

// "The Vuex store mantra": state variables are read, getters are called, mutations are COMMITted, actions are DISPATCHed
