"use strict";

// 필요한 요소들을 가져오기
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

// 양식 확인 함수
function form_checking() {
    // 아이디가 비어 있는지 확인
    if (id.value == "") {
        alert('아이디를 입력바랍니다.');
        id.focus(); // 포커스 설정
        return false; // 제출 방지
    }
    // 비밀번호가 비어 있는지 확인
    if (password.value == "") {
        alert('비밀번호를 입력바랍니다.');
        password.focus(); // 포커스 설정
        return false; // 제출 방지
    }
}