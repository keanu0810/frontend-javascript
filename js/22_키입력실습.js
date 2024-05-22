        //키 다운 background = lighblue
        //키 다운 color = lightpink

        //키 업 background = lighpink
        //키 다운 color = lightblue
        키들[숫자값저장].style.background = "black";
        키들[숫자값저장].style.color = "black";
      document.addEventListener("keyup", function (e) {
        let 숫자값저장; // 인덱스 값을 저장할 변수

        switch (e.key) {
          case "q":
            숫자값저장 = 0;
            break;
          case "w":
            숫자값저장 = 1;
            break;
          case "e":
            숫자값저장 = 2;
            break;
          case "r":
            숫자값저장 = 3;
            break;
          default:
            return; // 함수종료
        }
 
        키들[숫자값저장].style.background = "pink";
        키들[숫자값저장].style.color = "pink";
      });
      키들[숫자값저장].style.background = "black";
        키들[숫자값저장].style.color = "black";
      function 키업기능(e) {}
        let 숫자값저장; 

        switch (e.key) {
          case "q":
            숫자값저장 = 0;
            break;
          case "w":
            숫자값저장 = 1;
            break;
          case "e":
            숫자값저장 = 2;
            break;
          case "r":
            숫자값저장 = 3;
            break;
          default:
            return; // 함수종료
        }
        //숫자번호와 일치하는 key 배열의 태그색을 변경
        키들[숫자값저장].style.background = "lighpink";
        키들[숫자값저장].style.color = "lightblue";
      });
      