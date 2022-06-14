function showTime() {
    'use strict';
    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();
    
    if (hours < 10) {
        
        hours = '0' + hours;
    }
    
    if (minutes < 10) {
        
        minutes = '0' + minutes;
    }
    
    if (seconds < 10) {
        
        seconds = '0' + seconds;
    }
    
    if (hours > 12) {
        
        hours = hours - 12;
    }
    
    if (hours == 0) {
        
        hours = 12;
    }

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;}
    window.onload = function () {
    'use strict';
    setInterval(showTime, 500);}