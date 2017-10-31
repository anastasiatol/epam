var XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;

var resources = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Currencies/141', 'http://www.nbrb.by/API/ExRates/Rates/RUB?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&ParamMode=2', 'http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=0', 'http://www.nbrb.by/API/ExRates/Rates/USD?onDate=Mon%2C+30+Oct+2017+21%3A00%3A00+GMT&ParamMode=2'];

var getInformationFromServer = function (resource) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                reject(xhr.statusText);
            } else {
                resolve(xhr.responseText);
            };
        };
        xhr.open('GET', resource, true);
        xhr.send();
    });
};

getInformationFromServer(resources[0])
    .then(information => {
        console.log(information);
        console.log('1---------------------------------');
        return getInformationFromServer(resources[1]);
    })
    .then(information => {
        console.log(information);
        console.log('2---------------------------------');
        return getInformationFromServer(resources[2]);
    })
    .then(information => {
        console.log(information);
        console.log('3---------------------------------');
        return getInformationFromServer(resources[3]);
    })
    .then(information => {
        console.log(information);
        console.log('4---------------------------------');
        return getInformationFromServer(resources[4]);
    })
    .then(information => {
        console.log(information);
        console.log('5---------------------------------');
    })
