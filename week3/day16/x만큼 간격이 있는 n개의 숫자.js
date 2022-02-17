/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12954
문제 : x와 n을 입력받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 리턴
 */

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}

/*
n개 만큼 출력할 것이기 때문에 n이하로 반복
배열에 데이터 넣기 위해 push 사용
 */