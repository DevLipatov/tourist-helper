const changeTemperatureBadge = (temperature) => {
    return {
        type: 'TEMPERATURE_BADGE',
        payload: temperature
    }
};

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

const fullInfoLoaded = (fullInfo) => {
    return {
        type: 'FETCH_FULL_INFO_SUCCESS',
        payload: fullInfo
    }
};

const fullInfoLoadedError = (error) => {
    return {
        type: 'FETCH_FULL_INFO_FAILURE',
        payload: error
    }
};

export {
    changeTemperatureBadge,
    changeSelectedCategory,
    popularInfoLoaded,
    popularInfoLoadedError,
    shortInfoLoaded,
    fullInfoLoaded,
    shortInfoLoadedError,
    fullInfoLoadedError
};