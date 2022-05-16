/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12943
문제 : 주어진 수가 1이 될때까지 다음작업을 반복하면 모든 수를 1로 만들 수 있다. (콜라츠의 추측)
1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
위 작업을 몇 번이나 반복해야 하는지 반환하는 함수 반환
작업을 500번 반복해도 1이 되지 않으면 -1 반환하기
 */

function solution(num) {
  let answer = 0;

  while (num != 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = (num * 3) + 1;
    }
    answer += 1;
  }
  if (answer >= 500) {
    return -1;
  } else {
    return answer;
  }
}