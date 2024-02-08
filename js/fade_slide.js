$(function () {
    var imgs = 3;
    /*슬라이드 이미지 총갯수 -1만큼 지정(자바스크립트나 제이쿼리에서 숫자는 0부터 시작하기 때문). 
    요 변수는 이미지 총갯수를 알려주는 역할을 함.(img가 4장이면 0,1,2,3이 되므로
        var imgs = 3; 으로 입력한다.)*/
    var now = 0;
    /*지금 몇번째 이미지를 보여줄건지 계산할 때 사용될 예정. 
    처음에는 첫번째 이미지부터 보여야 하므로, 0 입니다.*/
    setInterval(function () { slide_img(); }, 3000);
    function slide_img() {
        /*slide_img라는 함수의 정의*/
        now = now == imgs ? 0 : now += 1;
        /*now는 slide함수가 실행될때마다 0,1,2 ,0,1,2를 반복하게 된다.*/
        $("#slide ul li").eq(now - 1).fadeOut();
        /*#slide ul의 now-1번째 li는 안보이게 만든다.*/
        $("#slide ul li").eq(now).fadeIn();
        /*#slide ul의 now 번째 li는 보이게 만든다.*/
    };

});