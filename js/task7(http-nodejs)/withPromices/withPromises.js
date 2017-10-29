var XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;

var resorces = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Currencies/141', 'http://www.nbrb.by/API/ExRates/Rates/RUB?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&ParamMode=2', 'http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=0', 'http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=1'];

var getInformationFromServer = function (resorce) {
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                reject(xhr.statusText);
            } else {
                resolve(xhr.responseText);
            };
        };
        xhr.open('GET', resorces[indexResorces], false);
        xhr.send();
    });
};

for (var indexResorces = 0; indexResorces < resorces.length; indexResorces++) {
    var xhr = new XMLHttpRequest();
    var data = getInformationFromServer(resorces[indexResorces]);
    data.then((data) => {
        console.log(data);
        console.log('---------------------------------')
    });
};
