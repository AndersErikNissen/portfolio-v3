/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794
*/

const
// Blocks
// "Bulding Blocks" values start with _.
_status = "?status=publish",
_category = "&categories=81",
_perPage = "&per_page=50",

// Base
apiBase = "https://skole.aenders.dk/wp-json/wp/v2/posts",
apiQueryBase = _status + _category + _perPage,

// Collection
ApiGet = {

}