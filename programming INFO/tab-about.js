$(document).ready(function () {
    $("#about-det li").click(function () {
        var clId = $(this).attr("id");
        $(this).removeClass("inactive").siblings().addClass("inactive");
        $(".about-page div").hide();
        $("#" + clId + "-cont").fadeIn("1000");
    });
});