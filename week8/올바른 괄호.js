/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12909
문제 : 괄호로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호면 true, 아니면 false 반환하는 solution 함수 완성
열리는 괄호가 있으면 닫히는 괄호가 있어야함.
*/

function solution(s) {
  let answer = true;
  let S = [...s]; //spread로 s문자열을 배열에 하나씩 넣어놓기
  let next = 0; //'('여는 괄호 찾으려는 변수

  if (S[0] === ')') return false; // 첫번째부터 닫힌 거면 false

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(')// 열린 괄호있으면 다음 문자 확인하기
      next++;
    else if (next >= 1 && S[i] === ')') {
      //다음으로 이동하고 닫힌거 있으면
      next--; //next를 줄여줌
    }
  }

  if (next === 0)
    return true;
  else { return false };


}

//🧐다른 방법으로는 여는 괄호의 수를 세서 닫는 괄호의 개수가 더 많을 시 false 반환하는 방법도 있음. stack, push, pop 사용
/*
function solution(s){
    let stack = [], cnt = 0; //스택사용
    for(let i=0; i<s.length; i++){
        if(s[i] === '(') {
            stack.push('(');
            cnt++;
        }
        else {
            stack.pop();
            cnt--;
        }
    }
    if(stack.length > 0 || cnt !== 0) return false;
    return true;
}
*/