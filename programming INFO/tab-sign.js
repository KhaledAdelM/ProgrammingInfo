
$(document).ready(function () {
    "use strict";
    $("#sign-up-in li").click(function () {
        
        var myID = $(this).attr("id");
        
        $(this).removeClass("inactive").siblings().addClass("inactive");
        
        $(".sign-up-in div").hide();
        
        $("#" + myID + "-det").fadeIn("1000");
    });
});