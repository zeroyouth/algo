/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42883
문제 : 어떤 숫자에서 k개의 수를 제거 했을 때 얻을 수 있는 가장 큰 수 구하기  */

function solution(number, k) {
    const stack = []; // 최종 글자 저장될 스택
    for(let i = 0; i< number.length; i++) { //일단 모든 숫자 비교
        let num = number[i]; // 처음에는 그냥 push한다.
        while(k > 0 && stack[stack.length -1] < num) { //현재 인덱스와 이전 인덱스 비교해서 현재가 이전보다 크면 제거하고 그거 넣음. 그리고 제거하는 숫자 1감소 
            stack.pop();
            k--;
        }
        stack.push(num); //제거할 숫자 다 채웠으면 (k개) push함 
    }
    //k가 0이면 스택 값 자체를 문자열로 만들면 답이 된다. 
    return stack.slice(0, stack.length -k).join("");
}


/*
stack으로 풀어야함 .. 너무 어려워서 못풀음.
*/