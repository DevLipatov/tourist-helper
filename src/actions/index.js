const popularInfoLoaded = (popularInfo) => {
    return {
        type: 'FETCH_POPULAR_INFO_SUCCESS',
        payload: popularInfo
    }
};

const changeSelectedCategory = (category) => {
    return {
        type: 'CHANGE_SELECTED_CATEGORY',
        payload: category
    }
};

const popularInfoLoadedError = (error) => {
    return {
        type: 'FETCH_POPULAR_INFO_FAILURE',
        payload: error
    }
};

const shortInfoLoaded = (shortInfo) => {
    return {
        type: 'FETCH_SHORT_INFO_SUCCESS',
        payload: shortInfo
    }
};

const shortInfoLoadedError = (error) => {
    return {
        type: 'FETCH_SHORT_INFO_FAILURE',
        payload: error
    }
};

const countryDataLoaded = (data) => {
    return {
        type: 'FETCH_COUNTRY_DATA_SUCCESS',
        payload: data
    }
};

const countryDataLoadedError = (error) => {
    return {
        type: 'FETCH_COUNTRY_DATA_ERROR',
        payload: error
    }
};

export {
    changeSelectedCategory,
    popularInfoLoaded,
    popularInfoLoadedError,
    shortInfoLoaded,
    shortInfoLoadedError,
    countryDataLoaded,
    countryDataLoadedError
};