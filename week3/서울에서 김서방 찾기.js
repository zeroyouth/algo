/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12919
문제 : 배열 seoul에서 문자열"Kim"의 위치 x를 찾아 "김서방은 x에 있다"는 String을 반환하는 함수
 */

function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim')
        return `김서방은 ${i}에 있다`
    }
}