/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12973
문제 : 소문자로 이루어진 문자열 s, 같은 알파벳이 2개 붙어 있는 짝을 찾고 그 둘을 제거함. 앞 뒤 문자열을 이어 붙임. 문자열을 모두 제거한다면 종료
성공적으로 수행하면 1, 아니면 0리턴
*/

function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]); //스택에 문자열 넣기
    if (stack[stack.length - 1] == stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  //     stack.length가 false(empty)이면 1, true면 0 
  return stack.length ? 0 : 1;
}

/*
스택 마지막 값과 그 전 문자를 비교해서 같으면 끝에 들어간 값 pop 2번 해줌
스택이 비었으면 1(다 제거 되었으면) 나오고 아닌 경우 제거가 안되어서 0이 출력됨.
🌠스택 사용이 관건! 문자열로 풀면 시간초가
*/