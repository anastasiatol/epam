import { getFromLocalStorage } from './../../services/getFromLocalStorage.servise';
import { saveInLocalStorage } from './../../services/saveInLocalStorage.servise';

var initialState = {
    advancedSearch : {
        title: '',
        overview: '',
        genre: {
            'Action': false,
            'Adventure': false,
            'Thriller': false,
            'Comedy': false,
            'Fantasy': false,
            'Drama': false,
            'Horror': false,
            'Crime': false,
            'War': false,
            'Documentary': false
        },
        adult: false,
        rememberInputs: false,
        genre_ids: []
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
                localStorage.removeItem('advancedsearch');
                saveInLocalStorage (action.payload, 'advancedsearch');
            }
            return state;

        case 'CANCEL_SEARCH':
            localStorage.removeItem('advancedsearch');
            return {
                advancedSearch : {
                    title: '',
                    overview: '',
                    genre: {
                        'Action': false,
                        'Adventure': false,
                        'Thriller': false,
                        'Comedy': false,
                        'Fantasy': false,
                        'Drama': false,
                        'Horror': false,
                        'Crime': false,
                        'War': false,
                        'Documentary': false
                    },
                    adult: false,
                    rememberInputs: false,
                    genre_ids: []
                }
            };

        default:
            return state;
    }
}