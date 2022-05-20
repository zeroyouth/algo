/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12932
문제 : 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴한다.
*/

function solution(n) {
  let answer = [];
  n = n + "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

/*
더 간단한 풀이 🌟:

function solution(n) {
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}

자연수 n을 문자열로 만든 후, split으로 각 자릿수를 원소로 가지는 배열로 변환
그 다음 배열의 각 자릿수를 문자열에서 숫자로 변환한 후, reverse()를 이용해 원소의 순서를 뒤집는 방법
 */