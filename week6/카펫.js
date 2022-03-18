/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42842
문제 : 카펫의 갈색 격자의 수 brown, 노란색 격자의 수 yello가 주어졌을 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return */

function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;

    //카펫 최소 높이 3 
    for(let height=3; height<=brown; height++) {
        //높이로 나눌때 나머지가 없을 경우,  딱 떨어지는 경우
        if(sum % height === 0) {
            //가로
            let weight = sum / height;
            //-2는 양끝 테누리 갈색을 의미 
            if((height-2) * (weight-2) === yellow) {
                return [weight, height];
            }
        }
    }
    return answer;
}

//노란색 격자수가 예를 들어 24일 경우, 노란색 격자 가로, 세로는 12*2, 8*3, 6*4 등이 존재한다. 
//따라서 임의의 높이를 나누고 그 나머지가 0일 경우에서 그 임의의 수 (가로 -2)*(높이 -2)가 노란색 격자 수이면 정답이 되는 것임.

/*(가로-2) * (높이-2) = 노란색 격자 수 라면, 현재 높이, 가로의 길이를 찾은 것
(-2를 해서 곱한 이유는 양끝의 테투리가 갈색이기 때문에 빼고 계산해준다)*/

