$(function () {
    /*gnb>li에 마우스를 올렸을 때 
    sub와 sub_bg가 slide되어 내려온다.*/
    $("#gnb>li").mouseover(function () {
        $(".sub").stop().slideDown();
        $(".sub_bg").stop().slideDown();
    });

    /*header_inner에서 마우스가 빠져나가면 
    sub와 sub_bg가 slide되어 올라간다.*/
    $(".header_inner").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".sub_bg").stop().slideUp();
    });
});