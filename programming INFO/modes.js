$(document).ready(function () {
    $("button[class*='btn']").click(function () {
        $("link[href*='Sign']").attr("href", "ProgramingINFO-Sign-in-up" + $(this).val() + ".css");
    });
});