
var initialState = {
    myLibraryCollection: []
};

export function myLibraryCollectionReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_MY_LIBRARY':
            let localStorageMyLibraryS = localStorage.getItem('mylibrary');
            if (localStorageMyLibraryS) {
                var localStorageMyLibrary = JSON.parse(localStorageMyLibraryS);
                return {
                    myLibraryCollection: localStorageMyLibrary
                };
            } else {
                return state;
            }

        case 'ADD_TO_MY_LIBRARY':
            let localStorageMyLibrarySTR = localStorage.getItem('mylibrary');
            if (!localStorageMyLibrarySTR) {
                let arrMyLibrary = [];
                arrMyLibrary.push(action.payload);
                let arrMyLibrarySTR = JSON.stringify(arrMyLibrary);
                localStorage.setItem('mylibrary', arrMyLibrarySTR);
            } else {
                let localStorageMyLibrary = JSON.parse(localStorageMyLibrarySTR);
                localStorageMyLibrary.push(action.payload);
                let arrMyLibrarySTR = JSON.stringify(localStorageMyLibrary);
                localStorage.removeItem('mylibrary');
                localStorage.setItem('mylibrary', arrMyLibrarySTR);
            }
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