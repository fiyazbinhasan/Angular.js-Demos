$("#designation").click(function () {
    $("#person").removeClass("active");
    $("#add").removeClass("active");
    $("#designation").addClass("active");
});
$("#person").click(function () {
    $("#person").addClass("active");
    $("#add").removeClass("active");
    $("#designation").removeClass("active");
});
$("#add").click(function () {
    $("#person").removeClass("active");
    $("#designation").removeClass("active");
    $("#add").addClass("active");
});
