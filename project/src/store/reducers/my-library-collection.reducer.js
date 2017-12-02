import { saveInLocalStorage } from './../../services/saveInLocalStorage.servise';
import { getFromLocalStorage } from './../../services/getFromLocalStorage.servise';
import { advancedSearchServise } from './../../services/advanced-search.servise';

var initialState = {
    myLibraryCollection: [],
    filteredMylibrary: []
};

export function myLibraryCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_MY_LIBRARY':
            if (getFromLocalStorage('mylibrary')) {
                return {
                    ...state,
                    myLibraryCollection: getFromLocalStorage('mylibrary')
                };
            } else {
                return state;
            }

        case 'ADD_TO_MY_LIBRARY':
            saveInLocalStorage (action.payload, 'mylibrary');
            return {
                ...state,
                myLibraryCollection: [...state.myLibraryCollection, action.payload]
            };

        case 'DELETE_FROM_MY_LIBRARY':
            let localStorageMyLibrarySTRR = localStorage.getItem('mylibrary');
            let localStorageMyLibraryDel = JSON.parse(localStorageMyLibrarySTRR);
            let newlocalStorageMyLibrary = localStorageMyLibraryDel.filter(v => v.id !== action.payload.id);
            let newlocalStorageMyLibrarySTR = JSON.stringify(newlocalStorageMyLibrary);
            localStorage.setItem('mylibrary', newlocalStorageMyLibrarySTR);

            let newMyLibraryCollection = state.myLibraryCollection.filter(v => v.id !== action.payload.id);
            return {
                ...state,
                myLibraryCollection: newMyLibraryCollection
            };

        case 'DO_ADVANCED_SEARCH':
            let filteredMylibrary = advancedSearchServise (state.filteredMylibrary, action.payload);
            return {
                ...state,
                filteredMylibrary: filteredMylibrary
            };

        case 'CANCEL_SEARCH':
            return {
                ...state,
                filteredMylibrary: state.myLibraryCollection
            };

        default:
            return state;
    }
}