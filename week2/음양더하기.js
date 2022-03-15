/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/76501

문제 : absolutes에는 정수의 절대값이 담겨있고, signs에는 이 정수들의 부호를 담은 배열이 주어져있음. 실제 정수들의 합을 구하여 retrun

 */

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}


/*풀이 과정 :  
1. 반복문으로 인풋 배열 순회 
2. signs 배열의 값이 true면 + ,false면 - 로 계산
3. 반복문 끝나면 더한 값 리턴

화살표 함수랑 삼항연산자라로 한 줄 코딩 한사람들도 있음;; 대단..
*/
