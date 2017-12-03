import { getFromLocalStorage } from './getFromLocalStorage.servise';

export function advancedSearchInitialServise () {

    if (getFromLocalStorage('advancedsearch')) {
        return getFromLocalStorage('advancedsearch')[0];
    } else {
        return {
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
        };
    }
}