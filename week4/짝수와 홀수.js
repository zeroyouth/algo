/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12937
문제 : 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution 완성
*/

function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

//삼항연산자를 사용했음.