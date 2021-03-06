/*
출처 :  https://programmers.co.kr/learn/courses/30/lessons/12945
문제 : 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수이다. 이때 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수를 완성해라
*/

function solution(n) {
    let answer = 0;
    let f1 = 0, f2 = 1;

    for (let i = 2; i <= n; i++) { //2이상 부터 돌고 n까지 
        answer = (f1 + f2) % 1234567; //여기서 answer값은 피보나치 수임.
        f1 = f2; //f1에 f2를 대입하고
        f2 = answer; //f2에 answer을 대입한다.
    }

    return answer;
}

// 문제에서 요구하는 것은 피보나치 수열을 푸는 가장 기본적인 방법인 리커젼 방식의 위험을 알고 반복적인 방법으로 고칠 수 있는 지 요구
//값을 1234567로 나눠야하는 이유 : 피보나치 수 44만 해도 2,971,215,073로 int의 값을 훨씬 넘은 수라 int 내에서 해결하기 위한 문제 의도

