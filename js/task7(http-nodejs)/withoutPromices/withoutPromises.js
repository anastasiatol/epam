var XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;

var resources = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Currencies/141', 'http://www.nbrb.by/API/ExRates/Rates/RUB?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&ParamMode=2', 'http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=0', 'http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=1'];

function getInformationFromServer(resource, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.log(xhr.statusText);
            callback();
        } else {
            console.log(xhr.responseText);
            callback();
        };
    };

    xhr.open('GET', resource, true);
    xhr.send();

};

getInformationFromServer(resources[0], function () {
    console.log('1---------------------------------------');
    getInformationFromServer(resources[1], function () {
        console.log('2---------------------------------------');
        getInformationFromServer(resources[2], function () {
            console.log('3---------------------------------------');
            getInformationFromServer(resources[3], function () {
                console.log('4---------------------------------------');
                getInformationFromServer(resources[4], function () {
                    console.log('5---------------------------------------');
                })
            })
        })
    })
})
