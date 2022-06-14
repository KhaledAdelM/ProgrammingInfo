var scroll_top = $('.sco-to-top');
$(window).scroll(function () {
    
    if ($(window).scrollTop() >= 1000) {
        
        if ( scroll_top.is(':hidden')) {
            
            scroll_top.fadeIn(400);
        }
        
    } else {
        
        scroll_top.fadeOut(400);
        
    }
});
scroll_top.click(function (event) {
    
    event.preventDefault();
    
    $('html, body').animate({
        
        scrollTop: 0
        
    }, 1000);
});