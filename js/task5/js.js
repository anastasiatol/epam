
if (performance.navigation.type === 1) {
    localStorage.clear();
}

var eventName = document.getElementById('eventName');
var dataStart = document.getElementById('dataStart');
var timeStart = document.getElementById('timeStart');
var dataEnd = document.getElementById('dataEnd');
var timeEnd = document.getElementById('timeEnd');
var dressCode = document.getElementsByName('dress-code');
var cuisine = document.getElementById('cuisine');
var beverages = document.getElementById('beverages');
var description = document.getElementById('description');

for (var key in localStorage) {
    if (document.getElementById(key)) {
        var currentKey = document.getElementById(key);
        currentKey.value = localStorage[key];
    };
};

if (localStorage['dressCode']) {
    for (var i = 0; i < dressCode.length; i++) {
        if (dressCode[i].value === localStorage['dressCode']) {
            dressCode[i].checked = true;
        }
    }
}

for (var i = 0; i < dressCode.length; i++) {
    dressCode[i].onclick = function () {
        localStorage.setItem('dressCode', this.value);
    }
};

eventName.onblur = function () {
    localStorage.setItem('eventName', eventName.value);
};

dataStart.onblur = function () {
    localStorage.setItem('dataStart', dataStart.value);
};

timeStart.onblur = function () {
    localStorage.setItem('timeStart', timeStart.value);
};

dataEnd.onblur = function () {
    localStorage.setItem('dataEnd', dataEnd.value);
};

timeEnd.onblur = function () {
    localStorage.setItem('timeEnd', timeEnd.value);
};

cuisine.onblur = function () {
    localStorage.setItem('cuisine', cuisine.value);
};

beverages.onblur = function () {
    localStorage.setItem('beverages', beverages.value);
};

description.onblur = function () {
    localStorage.setItem('description', description.value);
};
