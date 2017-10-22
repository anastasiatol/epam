buttonLeft.onclick = function() {
    if (monthToDraw) {
        monthToDraw = monthToDraw - 1;
    } else {
        monthToDraw = 11;
        yearToDraw = yearToDraw -1;
    };
    days.innerHTML = '';
    titleMonth.innerHTML = monthToDraw + 1;
    titleYear.innerHTML = yearToDraw;
    drawMonth (monthToDraw, yearToDraw);
};

buttonRight.onclick = function() {
    if (monthToDraw<11) {
        monthToDraw = monthToDraw + 1;
    } else {
        monthToDraw = 0;
        yearToDraw = yearToDraw + 1;
    };
    days.innerHTML = '';
    titleMonth.innerHTML = monthToDraw + 1;
    titleYear.innerHTML = yearToDraw;
    drawMonth (monthToDraw, yearToDraw);
};