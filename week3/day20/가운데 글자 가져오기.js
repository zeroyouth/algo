/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12903
문제 : 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환
*/

function solution(s) {
    var answer = '';

    if(s.length % 2  == 0) {//짝수일때는 문자열 2개 나와야함.
        answer = s[(s.length / 2) - 1] + s[s.length / 2]; //인덱스는 0부터 시작임을 명심!
    } else {//홀수일때
        answer = s[Math.floor(s.length / 2)] //반내림을 해준다. 2로 나누어 떨어지지 않기 때문, 그리고 인덱스는 0부터니까. 
    }
    return answer;
}

//짝수인지 홀수인지 판별, 짝수면 문자열 길이를 2로 나누어 해당 인덱스 이전값과 해당 인덱스값 출력하기 