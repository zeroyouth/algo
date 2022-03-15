/*
- 출처 : https://programmers.co.kr/learn/courses/30/lessons/82612
- 문제 : 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였음. 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return
- 조건 : 금액이 부족하지 않으면 0을 return
*/

function solution(price, money, count) {
    let total = 0;

    for(let i=1; i<=count; i++){
        total += price*i;
    }

    return money > total ? 0 : total-money //삼항연산자로 2번 표현
}

// 풀이과정🌟
// 1. count만큼 순회하면서 price * i를 더한다.
// 2. 만약 money가 total보다 크면 0리턴, 아니라면 total-money 리턴
