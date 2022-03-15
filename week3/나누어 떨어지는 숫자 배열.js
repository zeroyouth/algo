/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12910
문제 : array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성
조건 : divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1담아 리턴
*/

function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {//나누어 떨어진다면
            answer.push(arr[i])
        }
    }
    answer.sort((a, b) => a - b);

    if (answer.length === 0) //divisor로 나누어 떨어지는 element가 없을 경우
        answer.push(-1);

    return answer;
}