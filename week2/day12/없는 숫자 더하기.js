/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/86051
문제 : 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers,
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return */

function solution(num) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!num.includes(i)) answer += i;
    }

    return answer;
}

//Array.includes(값) : 배열에서 값이 존재한다면 true, 존재하지 않으면 false반환