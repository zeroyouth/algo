/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12953
문제 : 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수를 완성하기 */

//최대공약수 구하기 : 유클리드 호제법
const gcd = (a, b) => {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

//최소공배수 구하기
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

const solution = (arr) => {
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
};

// 최소공배수는 두 수의 곱 / 최대 공약수 임! 
// 따라서 먼저 최대공약수를 유클리드 호제법으로 구하고 나누면 해결 가능!