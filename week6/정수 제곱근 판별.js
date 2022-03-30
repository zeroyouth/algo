/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12934
문제 : 임의의 양의 정수 n에 대해, n이어떤 양의 정수 x의 제곱인지 아닌지 판단하려고 한다. 
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수 만들기 */

function solution(n) {
    let num = Math.sqrt(n); // 제곱근 구해주는 math메소드
    if (Number.isInteger(num)) {
        return (num + 1) * (num + 1)
    } else return -1
}

//두 가지 방법을 사용할 수 있음 🌟
//1. Number.isInteger() 함수로 입력받은 값이 정수인지 판별하는 방법
//2. js에서 나머지 연산자 % 는 두 수를 나누었을 때 나머지 값을 구해줌
// 정수는 1로 나누었을 경우 항상 나머지가 0이 되는 속성을 이용해서 주어진 숫자가 정수인지 체크한다. 

/* 2번 방법으로 풀기 😃
function solution(n) {
    let num = Math.sqrt(n); // 제곱근 구해주는 math메소드
    if(num % 1 === 0){ 
        return (num+1)*(num+1)
    }else return -1
}
*/