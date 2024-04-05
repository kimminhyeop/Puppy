document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 기본 제출 방지

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // 비밀번호 확인
    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    // 여기서 서버로 데이터를 보내거나 다른 작업을 수행할 수 있습니다.
    // 예를 들어 AJAX를 사용하여 서버에 회원가입 요청을 보낼 수 있습니다.
    // 이 예시에서는 단순히 콘솔에 데이터를 출력합니다.
    console.log("이름:", name);
    console.log("이메일:", email);
    console.log("비밀번호:", password);

    alert("회원가입이 완료되었습니다!");
    // 여기에 다음 페이지로 이동하는 코드를 추가할 수 있습니다.
 
});
