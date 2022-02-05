/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/68644
문제 : numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 리턴 

조건 : 중복된 숫자를 제거하고 오름차순으로 담아야 함.
*/

function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            let sum = numbers[i] +  numbers[j];
            if (answer.indexOf(sum) === -1) {
                answer.push(sum);
            }
        }
    }
    answer.sort((a,b) => a - b);
    return answer;
}

/*과정 : 
-반복적으로 numbers 요소에 접근해야 하기 때문에 for문 사용하기
- j는 i보다 크게 해서 같은 수를 두 개 더하지 않도록 한다.
-인덱스가 겹치지 않게 해야한다.(중복 제거)-> indexOf 메서드를 이용해서 answer 배열에 내가 구한 합이 없으면 담아라 조건을 넣음.
- 오름차순으로 담기 -> 오름차순으로 배열 담는 방법 .sort((a,b) => a-b) ;넣어주기*/ 

/*다른 사람들 풀이에서 Set이 보였는데 const answer = [...new Set(temp)]
찾아보니 Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다. 
mySet.add('some text'); // Set { 1, 5, 'some text' }  이런 느낌으로..
관련 글은 https://velog.io/@vvee1253/JavaScript-Set 🌟 */