/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12948
문제 : 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수

 */

function solution(phone_number) { //0103333 4444(11개)
   //                               0123456 78910
    const len = phone_number.length - 4; //7
    return "*".repeat(len) + phone_number.substring(len) //인덱스 7부터 끝까지 추출하기
}

// 문자열 내장함수
//'abc'.repeat( 2 ) => abcabc
// string.substring(start, end) end가 포함되어있지 않은 경우 문자열의 끝까지 모든 문자를 추출한다.
