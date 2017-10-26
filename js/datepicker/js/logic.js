function Сalendar () {
    this.today = new Date();
    this.currentYear = this.today.getFullYear();
    this.currentMonth = this.today.getMonth();
    this.currentDate = this.today.getDate();
    this.dayOfWeek1 = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.dayInMonth = new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    this.getDaysOfCurrentMonth ();
}

Сalendar.prototype.getDaysOfCurrentMonth = function (){
    this.daysOfCurrentMonth = [];
    for (var indexEmptyDay = 0; indexEmptyDay<this.dayOfWeek1; indexEmptyDay++) {
        this.daysOfCurrentMonth.push(0);
    };
    for (var indexDay = 1; indexDay<=this.dayInMonth; indexDay++) {
        this.daysOfCurrentMonth.push(indexDay);
    };
};

Сalendar.prototype.goNextMonth = function () {
    this.currentMonth = this.currentMonth + 1;
    if (this.currentMonth === 12) {
        this.currentMonth = 0;
        this.currentYear = this.currentYear + 1;
    }
}

Сalendar.prototype.goPreviousMonth = function () {
    this.currentMonth = this.currentMonth - 1;
    if (this.currentMonth === -1) {
        this.currentMonth = 11;
        this.currentYear = this.currentYear - 1;
    }
}

