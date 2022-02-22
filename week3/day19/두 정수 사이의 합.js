/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12912
문제 : 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성 */

function solution(a, b) {
    var answer = 0;

    if(a<=b){ //a가 b보다 작거나 같을 때
        for(let i = a; i <= b; i++) { //a부터 b까지 더한다.
            answer += i;
        }
    }

    if(a>b) {//a가 b보다 큰 케이스
        for(let i = b; i <= a; i++) {
            answer += i;
        }
    }
    return answer;
}

