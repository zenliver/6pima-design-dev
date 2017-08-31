$(function () {
    var bigImgUrl=new Array();
    var demoHref=new Array();

    $(".fancybox").each(function (i) {
        bigImgUrl[i]=$($(".fancybox").eq(i)).attr("href");
        demoHref[i]=$($(".fancybox").eq(i)).attr("data-href");
        console.log(bigImgUrl);
        console.log(demoHref);
        console.log(typeof bigImgUrl);

    })

    $("body").on("click",".fancybox-inner",function () {
        var bigImgSrc=$(this).find(".fancybox-image").attr("src");
        console.log(bigImgSrc);
        console.log(typeof bigImgSrc);

        var imgIndex="";
        for (var i = 0; i < bigImgUrl.length; i++) {
            if (bigImgUrl[i]==bigImgSrc) {
                imgIndex=i;
            }
        }
        console.log(imgIndex);
        var thisDemoHref=demoHref[imgIndex];
        console.log(thisDemoHref);

        window.open(thisDemoHref);
    });

});

$(function () {
    $("span.work-type-name.type-all").click(function () {
        $(".work-type-name").removeClass("active");
        $(this).addClass("active");
        $("#works .works .col-md-3").show();
    });
    $("span.work-type-name.type-website").click(function () {
        $(".work-type-name").removeClass("active");
        $(this).addClass("active");
        $("#works .works .col-md-3").hide();
        $("#works .thumbnail a[data-type='website']").parents(".col-md-3").show();
    });
    $("span.work-type-name.type-weixin-site").click(function () {
        $(".work-type-name").removeClass("active");
        $(this).addClass("active");
        $("#works .works .col-md-3").hide();
        $("#works .thumbnail a[data-type='weixin-site']").parents(".col-md-3").show();
    });
    $("span.work-type-name.type-app").click(function () {
        $(".work-type-name").removeClass("active");
        $(this).addClass("active");
        $("#works .works .col-md-3").hide();
        $("#works .thumbnail a[data-type='app']").parents(".col-md-3").show();
    });
});
