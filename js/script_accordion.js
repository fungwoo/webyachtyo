$(function () {
	$(".quest> ul> li").click(function () {
		$(this).children(".answer").slideToggle();
		$(this).siblings().children(".answer").slideUp();
	});
});

$(function () {
	$(".quest> ul> li").click(function () {
		$(this).toggleClass("turn");

		if ($(this).hasClass("turn") === true) {
			$(this).siblings().removeClass("turn");
		}

	});
});

/*클래스명(class)은 제이쿼리에서도 줄 수 있으므로
위의 li의 클래스명을 "turn" 이라고 주었다.
이 turn은 html이나 css에서는 보이지 않고,
F12에서는 확인이 가능하다. */