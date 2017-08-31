$(function () {
    $("#header a").click(function () {
        // event.preventDefault();
    });
    $("body").off("click",".fancybox-inner");
    $("body").on("click",".fancybox-inner",function () {
        // alert("test");
    });
});
