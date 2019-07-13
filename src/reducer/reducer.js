const initialState = {
    categories: ["Hot", "Cold", "Mild"],
    selectedCategory: "Hot",
    shortInfoLoading: true,
    countryDataLoading: true,
    popularInfo: [],
    shortInfo: [],
    countryData: {},
    popularInfoError: null,
    shortInfoError: null,
    countryDataError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POPULAR_INFO_SUCCESS' :
            return {...state, popularInfo: action.payload};
        case 'FETCH_POPULAR_INFO_ERROR' :
            return {...state, popularInfoError: action.payload};
        case 'FETCH_SHORT_INFO_SUCCESS' :
            const dictionary = [...state.shortInfo, ...action.payload]
                .reduce((accum, item) => {
                    accum[item.id] = item;
                    return accum;
                }, {});
            const shortInfo = Object.keys(dictionary)
                .sort()
                .map(id => dictionary[id]);
            return {...state, shortInfo, shortInfoLoading: false};
        case 'FETCH_SHORT_INFO_FAILURE' :
            return {...state, shortInfoError: action.payload};
        case 'FETCH_COUNTRY_DATA_SUCCESS' :
            return {...state, countryData: action.payload, countryDataLoading: false};
        case 'FETCH_COUNTRY_DATA_ERROR' :
            return {...state, countryDataError: action.payload};
        case 'TEMPERATURE_BADGE' :
            return {...state, temperatureBadge: action.payload};
        case 'CHANGE_SELECTED_CATEGORY' :
            return {...state, selectedCategory: action.payload};
        default:
            return state;
    }
};

export default reducer;