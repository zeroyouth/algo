/* 
문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

문제 : 문자열s의 짝수번째 알파벳은 대문자로 홀수번째는 소문자로 바꾼 문자열 리턴하기 

조건
1. 단어별로 짝/홀 인덱스 판단
2. 짝수 - 대문자(0부터 시작), 홀수 - 소문자
 */

let s = "try hello world";

function solution(s) {
    let i = 0;
    return s.split('').reduce((acc, cur) => { //문자열을 문자별로 잘라서 실행.
        acc += (i++ % 2) ? cur.toLowerCase() : cur.toUpperCase();
        
        if(cur === ' ') //만약 현재값이 공백이면 인덱스 0으로 초기화
            i = 0;
        
        return acc;
    }, ''); //초기값으로 빈문자열부터 시작 그래야 0번째도 짝수처리(대문자)됨.
}

solution(s);