var initialState = {
    advancedSearch : {
        title: '',
        overview: '',
        genre_ids: [],
        adult: false,
        rememberInputs: false
    }
};

export function advancedSearchReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_SAVED_SEARCH':
            let localStorageAdvancedSearchSTR = localStorage.getItem('advancedsearch');
            if (localStorageAdvancedSearchSTR) {
                var localStorageAdvancedSearch = JSON.parse(localStorageAdvancedSearchSTR);
                return {
                    advancedSearch: localStorageAdvancedSearch
                };
            } else {
                return state;
            }

        case 'DO_ADVANCED_SEARCH':
            return {
                advancedSearch: action.payload
            };

        case 'CANCEL_SEARCH':
            return state = initialState;
        default:
            return state;
    }
}