/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794
*/
const
    // Blocks
    // "Bulding Blocks" values start with _.
    _status = "?status=publish",
    _category = "&categories=",
    _categoryV3 = _category + "81",
    _categoryCases = _category + "82",
    _categoryDesigns = _category + "83",
    _perPage = "&per_page=50",
    _slug = slug => "&slug=" + slug,

    // Base
    apiBase = "https://skole.aenders.dk/wp-json/wp/v2/posts",
    apiQueryBase = _status + _category + _perPage,

    // Collection
    ApiGet = {
        byId: id => apiBase + '/' + id + apiQueryBase,
        bySlug: slug => apiBase + apiQueryBase + _slug(slug),
        allV3: apiBase + apiQueryBase + _categoryV3,
        allCases: apiBase + apiQueryBase + _categoryCases,
        allDesigns: apiBase + apiQueryBase + _categoryDesigns,
    };

export default ApiGet;