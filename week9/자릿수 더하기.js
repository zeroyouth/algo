/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12931
문제 : 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수 
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됨.
 */

function solution(n) {

  let sum = 0;

  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return sum;
}

// Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환.