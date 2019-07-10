const initialState = {
    //TODO ask where to hold beter
    categories: ["Hot", "Cold", "Mild"],
    //
    shortInfoLoading: true,
    fullInfoLoading: true,
    temperatureBadge: "-- - --",
    selectedCategory: "Hot",
    shortInfo: [],
    fullInfo: [],
    shortInfoError: null,
    fullInfoError: null,
    popularInfo: [],
    popularInfoError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POPULAR_INFO_SUCCESS' :
            return {...state, popularInfo: action.payload};
        case 'FETCH_POPULAR_INFO_ERROR' :
            return {...state, popularInfoError: action.payload};
        case 'FETCH_SHORT_INFO_SUCCESS' :
            return {...state, shortInfo: action.payload, shortInfoLoading: false};
        case 'FETCH_SHORT_INFO_FAILURE' :
            return {...state, shortInfoError: action.payload};
        case 'TEMPERATURE_BADGE' :
            return {...state, temperatureBadge: action.payload};
        case 'CHANGE_SELECTED_CATEGORY' :
            return {...state, selectedCategory: action.payload};
        case 'FETCH_FULL_INFO_SUCCESS' :
            return {...state, fullInfo: action.payload, fullInfoLoading: false};
        case 'FETCH_FULL_INFO_FAILURE' :
            return {...state, fullInfoError: action.error, fullInfoLoading: true};
        default:
            return state;
    }
};

export default reducer;