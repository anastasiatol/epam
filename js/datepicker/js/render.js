function renderCalendar(sourceTemplate, dataCalendar) {
    this.template = this.getCalendarTemplate(sourceTemplate);
    this.dataCalendar = dataCalendar;
    this.mainContainer = document.createElement('div');
    this.mainContainer.setAttribute('class', 't6-calendar');
    document.body.appendChild(this.mainContainer);
    this.parentElement = [this.mainContainer];
    this.indexParentElement = 0;
    
    this.makeCalendar(this.template, this.dataCalendar);
};

renderCalendar.prototype.getCalendarTemplate = function (sourceTemplate) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', sourceTemplate, false);
    xhr.send();
    calendarTemplateJSON = xhr.responseText;
    return JSON.parse(calendarTemplateJSON);
};

renderCalendar.prototype.makeCalendar = function (template, dataCalendar) {
    template.forEach(function (item) {
        if (item.quantity) {
            var chidrenQuantity = dataCalendar[item.quantity].length;
        } else {
            var chidrenQuantity = 1;
        };
        for (var indexChildren = 0; indexChildren<chidrenQuantity; indexChildren++) {
            var newElement = document.createElement(item.tag);
            newElement.setAttribute('class', item.class);
            if (item.event) {
                newElement.addEventListener (item.event[0], eval('this.' + item.event[1]).bind(this, item));
            };
            if (item.content) {
                newElement.innerHTML = item.content;
            };
            if (item.data) {
                newElement.innerHTML = dataCalendar[item.data];
            };
            if (item.check) {
                if (this.dataCalendar.currentYear === this.dataCalendar.todayYear) {
                    if (this.dataCalendar.currentMonth === this.dataCalendar.todayMonth) {
                        if (this.dataCalendar.daysOfCurrentMonth[indexChildren] === this.dataCalendar.currentDate) {
                            newElement.style.backgroundColor = '#edc862';
                        }
                    }
                } 
            }
            if (item.datas) {
                if (dataCalendar[item.quantity][indexChildren] !== 0) {
                    newElement.innerHTML = dataCalendar[item.quantity][indexChildren];
                } else {
                    newElement.classList.add('t6-days__day_empty');
                }
            };
            this.parentElement[this.indexParentElement].appendChild(newElement);
            if (item.childrens) {
                this.indexParentElement = this.indexParentElement + 1;
                this.parentElement[this.indexParentElement] = newElement;
                this.makeCalendar(item.childrens, dataCalendar);
                this.indexParentElement = this.indexParentElement - 1;
            };
        };
    }, this);
};

renderCalendar.prototype.goPreviousMonth = function() {
    this.dataCalendar.goPreviousMonth();
    this.mainContainer.innerHTML = '';
    this.makeCalendar(this.template, this.dataCalendar);    
};

renderCalendar.prototype.selectDay = function(item, event){
    if (this.target) {
        this.target.classList.remove(item.event[3]);
    };
    this.target = event.target;
    if (this.target.className === item.event[2]) {
        this.target.classList.add(item.event[3]);
    };
};

renderCalendar.prototype.goNextMonth = function() {
    this.dataCalendar.goNextMonth();
    this.mainContainer.innerHTML = '';
    this.makeCalendar(this.template, this.dataCalendar);    
};