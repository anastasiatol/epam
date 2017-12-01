import { getFromLocalStorage } from './../../services/getFromLocalStorage.servise';
import { saveInLocalStorage } from './../../services/saveInLocalStorage.servise';

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

            if (getFromLocalStorage('advancedsearch')) {
                return {
                    advancedSearch: getFromLocalStorage('advancedsearch')[0]
                };
            } else {
                return state;
            }

        case 'DO_ADVANCED_SEARCH':
            if (action.payload.rememberInputs) {
                saveInLocalStorage (action.payload, 'advancedsearch');
            }
            return {
                advancedSearch: action.payload[0]
            };

        case 'CANCEL_SEARCH':
            return state = initialState;
        default:
            return state;
    }
}