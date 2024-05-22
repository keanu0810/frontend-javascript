function 태그추가() {
    //새로운 div 생성하기 위해 변수 설정하기
    const newDiv = document.createElement("div");
    newDiv.textContent = "새로운 div 입니다.";

    //새로운 p 생성하기 위해 변수 설정하기
    const newP = document.createElement("p");
    newP.textContent="새로운 p 입니다";

    //새로운 div 안에 새로운 p 추가하기
    newDiv.appendChild(newP);
    /*
    위 코드는 div 생성하고 생성한 div안에 p 태그를 넣어주긴 하지만
    화면에서 어디에다가 div를 넣어야 하는지가 없음
    */

    //컨테이너로 이름을 작성한 div 태그에 div 추가하기
    //document.getElementById("컨테이너").appendChild(nweDiv);
    //만약에 컨테이너 안에 p 태그만 추가하길 원한다면
    document.getElementById("컨테이너").appendChild(newDiv);
}