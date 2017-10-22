var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDate = today.getDate();

var yearToDraw = currentYear;
var monthToDraw = currentMonth;

var calendar = document.createElement('div');
calendar.setAttribute('class', 't6-calendar');
document.body.appendChild(calendar);

// CALENDAR HEADER
var calendarHeader = document.createElement('div');
calendarHeader.setAttribute('class', 't6-calendar__calendar-header t6-calendar-header');

var buttonLeft = document.createElement('div');
buttonLeft.setAttribute('class', 't6-calendar-header__button');
buttonLeft.innerHTML = '&#9668';

calendarHeader.appendChild(buttonLeft);

var titleMonth = document.createElement('div');
titleMonth.setAttribute('class', 't6-calendar-header__title');
titleMonth.innerHTML = monthToDraw + 1;
calendarHeader.appendChild(titleMonth);

var titleYear = document.createElement('div');
titleYear.setAttribute('class', 't6-calendar-header__title');
titleYear.innerHTML = yearToDraw;
calendarHeader.appendChild(titleYear);

var buttonRight = document.createElement('div');
buttonRight.setAttribute('class', 't6-calendar-header__button');
buttonRight.innerHTML = '&#9658';

calendarHeader.appendChild(buttonRight);

calendar.appendChild(calendarHeader);

//WEEK LINE
var weekLine = document.createElement('div');
weekLine.setAttribute('class', 't6-calendar__weekLine');

var week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

for (var i=0; i<week.length; i++) {
    var dayWeek = document.createElement('div');
    dayWeek.innerHTML = week[i];
    dayWeek.setAttribute('class', 't6-calendar__day-week');
    weekLine.appendChild(dayWeek);
}

calendar.appendChild(weekLine);

var days = document.createElement('div');
days.setAttribute('class', 't6-calendar__days t6-days');
calendar.appendChild(days);

//DAYS

drawMonth(monthToDraw, yearToDraw);

function drawMonth (monthToDraw, yearToDraw) {
    var dayOfWeek1 = new Date(yearToDraw, monthToDraw, 1).getDay();
    for (var indexEmptyDay = 0; indexEmptyDay<dayOfWeek1; indexEmptyDay++) {
        var emptyDay = document.createElement('div');
        emptyDay.setAttribute('class', 't6-days__day t6-days__day_empty');
        days.appendChild(emptyDay);
    };
    var dayInMonth = new Date(yearToDraw, monthToDraw+1, 0).getDate();
    for (var indexDay = 1; indexDay<=dayInMonth; indexDay++) {
        var day = document.createElement('div');
        day.setAttribute('class', 't6-days__day t6-days__day_not-empty');
        day.innerHTML = indexDay;
        if ((monthToDraw === currentMonth) && (yearToDraw === currentYear) && (indexDay === currentDate)){
            day.style.backgroundColor = '#ead879';
        }
        days.appendChild(day);
    }
} 