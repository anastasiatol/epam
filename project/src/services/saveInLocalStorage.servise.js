export function saveInLocalStorage (data, location) {
    let localStorageDataSTR = localStorage.getItem(location);
    if (!localStorageDataSTR) {
        let tempArr = [];
        tempArr.push(data);
        let tempArrSTR = JSON.stringify(tempArr);
        localStorage.setItem(location, tempArrSTR);
    } else {
        let localStorageData = JSON.parse(localStorageDataSTR);
        localStorageData.push(data);
        let arrSTR = JSON.stringify(localStorageData);
        localStorage.removeItem(location);
        localStorage.setItem(location, arrSTR);
    }
}