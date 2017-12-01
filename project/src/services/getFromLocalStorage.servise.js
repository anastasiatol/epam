export function getFromLocalStorage (location) {
    let localStorageDataSTR = localStorage.getItem(location);
    if (localStorageDataSTR) {
        return JSON.parse(localStorageDataSTR);
    }
}