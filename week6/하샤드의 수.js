/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12947
문제 : 양의 정수 x가 하샤드의 수이려면 x의 자릿수의 합으로 x가 나누어져야함.
18의 자릿수 합은 9이고 18은 9로 나누어지므로 하샤드의 수임.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수 완성하기
*/

function solution(x) { // x = 18
    let sum = 0;
    let arr = String(x).split(""); // [1, 8]

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]) // 1+8
    }

    return (x % sum === 0) ? true : false;

}

// ab % sum(a,b) = 0 이면 true => 하샤드의 수  

