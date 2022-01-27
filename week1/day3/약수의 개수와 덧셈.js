/* 
- 출처 : https://programmers.co.kr/learn/courses/30/lessons/77884
- 문제 : 약수의 개수와 덧셈

- 조건 : 1. 약수의 개수가 짝수 인 수는 더하고 홀수인 수는 뺀 수를 리턴
*/ 

function divisors(num) { //약수 찾기
    let count = 0;

    for(let i = 1; i <= num; i++) {
        if(num % i == 0 ) { //딱 나누어 떨어질때 카운트 올리기 
            count++;
        }
    }

    return count; //약수의 개수가 됨
}


function solution(left, right) {
    let answer = 0;

    for(let i = left; i <= right; i++) {
        let count = divisors(i);
        if (count % 2) { //약수의 개수가 홀수면 빼고
            answer -= i;
        } else { //짝수면 더한다.
            answer += i;
        }
    }
    return answer;
}


// //천재적 답안 :
// function solution(left, right) {
//     var answer = 0;
//     for(let i = left; i <= right; i++) {
//         if(Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }

// 놀라운 지식 🌟  : 제곱근이 정수면 약수의 개수는 홀수, 아니면 짝수 ex) 루트 16은 4 -> 정수, 약수는 1,2,4,8,16으로 5개(홀수) 
// 새로 알게 된 것 : 1. Math.sqrt(): () 안 숫자의 제곱근을 리턴
//                 2. Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.
