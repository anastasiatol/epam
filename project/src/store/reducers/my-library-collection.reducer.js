import { saveInLocalStorage } from './../../services/saveInLocalStorage.servise';
import { getFromLocalStorage } from './../../services/getFromLocalStorage.servise';

var initialState = {
    myLibraryCollection: []
};

export function myLibraryCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_MY_LIBRARY':
            if (getFromLocalStorage('mylibrary')) {
                return {
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

        default:
            return state;
    }
}