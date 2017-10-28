function Сalendar () {
    this.today = new Date();
    
    this.todayYear = this.today.getFullYear();
    this.todayMonth = this.today.getMonth();
    this.todayDate = this.today.getDate();
    
    this.currentYear = this.today.getFullYear();
    this.currentMonth = this.today.getMonth();
    this.currentDate = this.today.getDate();
    
    this.weekName = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.currentMonthName = this.monthNames[this.currentMonth];
    
    this.dayOfWeek1 = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.dayInMonth = new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    
    this.daysOfCurrentMonth = this.getDaysOfCurrentMonth ();
}

Сalendar.prototype.getDaysOfCurrentMonth = function (){
    this.daysOfCurrentMonth = [];
    for (var indexEmptyDay = 0; indexEmptyDay<this.dayOfWeek1; indexEmptyDay++) {
        this.daysOfCurrentMonth.push(0);
    };
    for (var indexDay = 1; indexDay<=this.dayInMonth; indexDay++) {
        this.daysOfCurrentMonth.push(indexDay);
    };
    return this.daysOfCurrentMonth;
};

Сalendar.prototype.goNextMonth = function () {
    this.currentMonth = this.currentMonth + 1;
    if (this.currentMonth === 12) {
        this.currentMonth = 0;
        this.currentYear = this.currentYear + 1;
    };
    this.dayOfWeek1 = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.dayInMonth = new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    this.currentMonthName = this.monthNames[this.currentMonth];
    this.daysOfCurrentMonth = this.getDaysOfCurrentMonth ();
};

Сalendar.prototype.goPreviousMonth = function () {
    this.currentMonth = this.currentMonth - 1;
    if (this.currentMonth === -1) {
        this.currentMonth = 11;
        this.currentYear = this.currentYear - 1;
    };
    this.dayOfWeek1 = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.dayInMonth = new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    this.currentMonthName = this.monthNames[this.currentMonth];
    this.daysOfCurrentMonth = this.getDaysOfCurrentMonth ();
};

