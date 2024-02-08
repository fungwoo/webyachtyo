$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1000) {
        /*아이콘이 나타나길 원하는 위치를 
        화면상의 높이(=window상의 header부터 아래로, 여기서는 1000으로 했다)로 
        설정한다.*/
        $(".top_btn").fadeIn();
        /*나타날 아이콘이 있는 클래스(top버튼이 있는 클래스)로 지정*/
    } else {
        $(".top_btn").fadeOut();
        /*나타날 아이콘이 있는 클래스(top버튼이 있는 클래스)로 다시 지정*/
    }
});