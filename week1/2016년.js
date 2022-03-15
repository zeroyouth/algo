/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12901
문제 : 2016년 a월 b일은 무슨 요일일까? 
조건 :: 2016년은 윤년임.
*/

function solution(a, b) {
    var answer = '';
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const date = new Date(`2016, ${a}, ${b}`); //date 생성자 함수
    answer = (day[date.getDay()]) //요일을 숫자로 표시
    return answer;
}

/* 풀이 
date 생성자 함수의 인자로 특정 날짜를 넣어주면 그 날짜에 대한 정보를 알 수 있음. 
*/