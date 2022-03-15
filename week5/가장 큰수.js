/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42746
문제 : 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 리턴한다. 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return*/

function solution(numbers) {
    let string = numbers.map(number => number + '');
    let answer = string.sort((a, b) => (b + a) - (a + b)).join('');
    return answer[0] === "0" ? "0" : answer;
}

//1. 숫자들을 문자로 변환한다. number + ''
//2. 문자로 변환된 숫자를 큰수의 조합으로 정렬한다. 
// ex) ["6","10","2"]를 가지고 106-610은 음수값이라 순서 변경x
// 210-102는 양수값이 나오기 때문에 순서 변경이 된다. 따라서 ["6","2","10"]이 되는데 여기서 join을 이용해서 "6210"을 만들어주면 된다. 
//3. 정렬이 완료되면 join을 통해 답 리턴
//4. 마지막 0일 경우에는 0을 리턴해야하기 때문에 삼항연산자를 사용했음.