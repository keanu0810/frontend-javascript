function 알림띄우기() {
    //변수선언
    const num = 10;
    const ste = "양수";

    // $ 사용해서 메세지 생성
    const msg = '$(num) 은/는 $(str) 입니다.^0^';
    /*
    const msg = "$(num) 은/는 $(str) 입니다.^0^"';
        $(변수명) 을 작성후 '(백틱)'이 아닌 ""나 ''를 사용하면 글자처럼 읽기 떄문에
        $(변수명) 을 작성한 의미가 없음
     */
    alert(msg);
}