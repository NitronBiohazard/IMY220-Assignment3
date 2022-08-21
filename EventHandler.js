function EventHandler(events) {
    this.events = events;
    this.getEventsBetweenDates = function(start, end) {
        var eventsBetweenDates = this.events.filter(function(event){
            if(Date.parse(start) <= Date.parse(event.dateStart) && Date.parse(end) >= Date.parse(event.dateEnd)) {
                return true;
            }else{
                return false;
            }
        })
        return eventsBetweenDates;
    }

    this.getByMonth = function(month) {
        var eventsInMonth = this.events.filter(function(event){
            var eventMonth = event.dateStart.slice(5,7);
            if(month == eventMonth) {
                return true;
            }else{
                return false;
            }
        })
        return eventsInMonth;
    }
    
    this.getUniqueDateAndSort = function() {
        this.events.sort(function(eventA, eventB) {
           var eventAMonth = eventA.dateStart.slice(5,7);
           var eventBMonth = eventB.dateStart.slice(5,7);
           return parseInt(eventAMonth) - parseInt(eventBMonth);
        });
        return this.events;
    }

    this.getSummarry = function() {

    }

Array.prototype.getEventsBetweenDates = EventHandler.getEventsBetweenDates();
Array.prototype.getByMonth = EventHandler.getByMonth();
Array.prototype.getUniqueDateAndSort = EventHandler.getUniqueDateAndSort();
Array.prototype.getSummarry = EventHandler.getSummarry();

}