/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12939
문제 : 문자열 s에 str에 나타나는 숫자 중에 최소값과 최대값을 찾아 이를 문자열  "(최소값) (최대값)" 형태로 반환하는 함수로 완성 */

function solution(s) {
    let s2 = s.split(' ') //공백제거
    let max = Math.max(...s2)
    let min = Math.min(...s2)
    return min + " " + max
}

/*
문자열에 공백 제거
최댓값과 최솟값을 저장한다. 
내장함수로 찾기 

//문자열에서 공백 제거하기
🌟String.split([separator[, limit]]) : String 객체를 지정한 구분자를 이용하여 여러개의 문자열로 나눈다.
1. separator(생략가능) : 문자열이나 정규표현식을 받을 수 있다. separator가 빈 문자열일 경우 str의 각각의 문자가 배열의 원소 하나씩으로 변환됩니다. 

2. limit(생략가능) : 끊어진 문자열의 최대 개수를 나타낸다. 

3. 반환값 :  주어진 문자열을 separator마다 끊은 부분 문자열을 담은 Array.

ex) var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);
//["Hello", "World.", "How"]

split 메소드를 사용하여 공백 문자""를 구분 기호로 사용하여 문자열을 배열로 분할 한 다음join메소드를 사용하여 배열을 문자열로 변환합니다. 이 두 가지 방법을 사용하여 공백을 제거합니다.
ex) text1.split(" ").join(""); 

🌟Spread Operator(전개 연산자)는 ES6 문법으로
'...' 이렇게 점 3개로 표현하고,
객체나 배열의 원소들을 하나씩 꺼내어서 펼쳐서 리턴합니다. (* 참고: week 4 - 제일 작은 수 제거하기)

즉, Math.max(...arr)와 같이 작성해주면 실제로는
Math.max(1, 2, 3, 4, 5)와 같이 실행됨!

 */