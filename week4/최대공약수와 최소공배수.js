/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12940
문제 : 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution 완성하기
 */

function solution(n, m) {
    let gcd = (a, b) => {
        return a % b ? gcd(b, a % b) : b //나머지가 0일때만 b(나누는수)임, 0이 아닌경우 재귀로 진행 (유클리드 호제)
    }
    let lcm = (a, b) => (a * b) / gcd(a, b)
    return [gcd(n, m), lcm(n, m)];
}
/*
최대공약수GCD(greatest common divisor)는 유클리드 호제법 사용
최소공배수LCM(largest common multiple)는 자연수 2개를 곱하여 최대공약수로 나누기 
🌟몰랐던 공식
LCM(a, b) = a*b/gcd(a, b)
사실상 GCD를 구하면 LCM을 구한 것이나 다름없다. 

//최대공약수, 최대공배수 구하기 코드
function gcd(n, m) {//최대공약수
    let rest = n % m;
    if (rest === 0) {
        return m;
    }
    return gcd(h, rest);
}

function lcm(n, m) {//최소공배수
    return n*m / gcd(n, m);
}
 */