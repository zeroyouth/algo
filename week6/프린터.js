/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42587
문제 : 중요도가 높은 문서를 먼저 인쇄하는 프린터 개발, 대기 목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities 와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 변수로 주어질때 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 
 */

function solution(priorities, location) {
    let answer = 0;

    let priorities_index = []; 
    for(let i = 0; i<priorities.length; i++){
        priorities_index.push(i);
    }

    let print, print_index;
    while(priorities[0]){
        print = priorities.shift(); //대기 목록의 가장 앞에 있는 문서의 우선순위

        //만약 현재 문서보다 우선순위가 높은 문서가 중간에 있는 경우, 대기 목록 순서 변경
        if(priorities.some((priorities) => priorities > print)) {
            priorities.push(print);//대기 목록 바로 뒤로 문서 이동
            priorities_index.push(priorities_index.shift()); //대기 목록의 id 순서도 변경
        }
        //우선순위가 높은 문서가 맨 앞에 있는 경우엔 해당 문서를 출력
        else{
            answer++;
        print_index = priorities_index.shift(); //현재 인쇄한 문서 id값이 내가 요청한 문서일 경우, 반복문 종료
        if(print_index == location) break;
        }
    }
    return answer;
}

/*
🌟 Array.some()을 이용해 출력 가능 여부를 판단
: some()메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 한다.
조건에 만족하면 즉시 순회 중단 true, 그 반대는 False를 리턴

- 내부 원소 한 개라도 만족하면 true 출력 
(every는 내부 원소가 모두 만족해야 true 출력임)

🌟현재 인쇄한 문서의 ID 값(초기 인덱스 값)이 location과 동일한 경우, 내가 요청한 문서가 인쇄됐다는 의미이므로 반복문을 빠져나옴
  */