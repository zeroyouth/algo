/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12951
문제 : JadenCase란 모든 단어의 첫 문자가 대문자이고 , 그 외의 알파벳은 소문자인 문자열임. 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 된다. 
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수 만들기 */

function solution(s) {
  s = s.toLowerCase() // 일단 소문자로 만들기
  let answer = s.split(" ").map(s => {//단락으로 쪼개서 map돌림
    let box = s.split("") //map 돌면서 box 변수에 넣어주기
    if (box[0] != null) { //첫문자가 비어있지 않으면 첫문자 대문자 치환
      box[0] = box[0].toUpperCase();
    }
    return box.join(''); //다시 단어로 합치고
  }).join(' '); //단락 합침
  return answer;
}

/*
📖 substring() 메소드랑 charAt()써서 푸는 방법
- substring() 메소드 : string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환
- charAt() 메소드 : str이 가리키고 있는 문자열에서 0번째에 있는 문자를 char타입으로 변환한다  🌟 보통 해당 문자열에서 자신이 원하는 문자 하나만 가져오고 싶을 때 사용

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
} 
*/
