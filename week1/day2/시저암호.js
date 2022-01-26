/* 
https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

문제 : 시저 암호
- 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식

조건 : 
- 공백은 밀어도 공백
- n은 1이상 25이하인 자연수
- 대소문자 구분 
*/

function solution(s, n){
    return s.split("").map(value => {
        if (value === " ") return value;
        return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n)
    }).join("");
}

//배운것 : 대소문자 판단을 아스키코드와 charCoadAt()을 사용하여 할 수 있다는 것을 알게됨. 
// 문자열 -> 아스키코드 : s.charCodeAt()
// 아스키코드 -> 문자열 : String.fromCharCode()