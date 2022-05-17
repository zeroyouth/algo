/*
출처: https://programmers.co.kr/learn/courses/30/lessons/12933
문제: 함수 solution은 정수 n을 매개변수로 입력받는다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해라. 예를들어 n이 118372면 873211을 리턴
 */

function solution(n) {
  let result = n.toString().split("").sort().reverse().join("");
  return parseInt(result);
}

//toString() 은 문자열을 반환하는 object의 대표적인 방법
//parseInt() 함수는 문자열 인자를 파싱하여 정수로 반환
//내장함수를 사용하는게 관건인 문제!

/* function solution(n) { //더짧게 쓴 코드
  return parseInt(String(n).split('').sort((a,b)=> b-a).join(''));
}
*/