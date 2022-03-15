/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/87389

문제 : n을 x로 나눈 나머지가 1이 되도록하는 가장 작은 자연수 x를 리턴
조건 : n은 3이상 */

function solution(n) {
    for (let i =2; i < n; i++) { //2부터 시작하게함.1부터 시작하면 나머지는 0이나옴
        if (n % i === 1) { //나머지가 1이면 리턴하기 
            return i;
        }
    }
}