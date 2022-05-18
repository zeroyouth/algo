/*
출처: https://programmers.co.kr/learn/courses/30/lessons/12944
문제: 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요
 */
function solution(arr) {
  let answer = 0;
  for (let value of arr) {
    answer += value;
  }
  return answer / arr.length;
}
