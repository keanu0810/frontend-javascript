const 이름값 = document.getElementById("user_name");
const 이메일값 = document.getElementById("user_email");
const 비밀번호값 = document.getElementById("user_pw");
const 비밀번호확인값 = document.getElementById("user_pw_confirm");

function 이름이메일확인() {
  const 이름 = 이름값.value;
  const 이메일 = 이메일값.value;
  const 비밀번호 = 비밀번호값.value;
}

function 비밀번호일치여부() {
  const pw = 비밀번호값.value;
  const pw_confirm = 비밀번호확인값.value;

  if (pw == pw_confirm) {
    alert("비밀번호가 일치합니다.");
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
}

  function 보이기숨기기() {
      const 박스 = document.getElementById("토글박스");
      if(박스.classList.contains("추가할클래스")){
          박스.classList.remove("추가할클래스")
      } else {
          박스.classList.add("추가할클래스");
      }
  }

