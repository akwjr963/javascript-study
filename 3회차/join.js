//제출 이벤트 받기(이벤트 핸들링)
//제출된 입력 값들을 참조
//입력값에 문제가 있는 경우 감지
//가입환영 인사 제공
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userID = event.target.id.value;
  let userPw1 = event.target.pw1.value;
  let userPw2 = event.target.pw2.value;
  let userName = event.target.name.value;
  let userPhone = event.target.phone.value;
  let userPosition = event.target.position.value;
  let userGender = event.target.gender.value;
  let userEmail = event.target.email.value;
  let userIntro = event.target.intro.value;

  if (userID.length < 6) {
    alert("아이디가 너무 짧습니다.6자 이상 입력해주세요.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  document.body.innerHTML = "";
  document.write(`<p>${userID}님 환영합니다</p>`);
});
