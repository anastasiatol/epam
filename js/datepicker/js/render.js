function renderCalendar(sourceTemplate, dataCalendar) {
    var template = this.getCalendarTemplate(sourceTemplate);
    this.parentElement = [document.body];
    this.indexParentElement = 0;
    this.makeCalendar(template, dataCalendar);

};

renderCalendar.prototype.getCalendarTemplate = function (sourceTemplate) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', sourceTemplate, false);
    xhr.send();
    calendarTemplateJSON = xhr.responseText;
    return JSON.parse(calendarTemplateJSON);
};

renderCalendar.prototype.makeCalendar = function (someElement, dataCalendar) {
    someElement.forEach(function (item) {
        if (item.quantity) {
            var chidrenQuantity = dataCalendar[item.quantity].length;
        } else {
            var chidrenQuantity = 1
        };
        for (var indexChildren = 0; indexChildren<chidrenQuantity; indexChildren++) {
            var newElement = document.createElement(item.tag);
            newElement.setAttribute('class', item.class);
            if (item.event) {
                newElement.addEventListener (item.event[0], item.event[2]);
            };
            if (item.content) {
                newElement.innerHTML = item.content
            };
            if (item.data) {
                newElement.innerHTML = dataCalendar[item.data];
            };
            if (item.datas) {
                newElement.innerHTML = dataCalendar[item.quantity][indexChildren];
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


var calendarNew = new Сalendar;
var renderCalendarNew = new renderCalendar('js/calendarTemplate.JSON', calendarNew);
