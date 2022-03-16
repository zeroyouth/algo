/*
출처 : 
문제 : 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있다.
구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 한다. 사람들의 몸무게를 담은 배열 people과 무게제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트의 개수의 최솟값을 return */

function solution(people, limit){
    let answer = 0;
    people.sort((a, b) => b - a);// 내림차순 정렬 [80 70 50 50]

    for(let i=0, j=people.length-1; i<=j; i++, answer++){ //i와 j는 인덱스
        if(people[i] + people[j] <= limit){
            j--; 
        }
    }
    return answer;
}

//가장 많이 탈 수 있는 방법은 가장 무거운 사람과 가장 가벼운 사람이 타는 방법임. 무게 순으로 정렬 시킨 후, 가장 무거운 사람과 가장 가벼운 사람의 무게 합이 무게 제한보다 낮거나 같으면 구명보트 개수 추가함. 그렇지 않으면 무거운 사람만 빠지고 구명보트 추가함. 

/* (처음에 효율성 통과를 못한 답)😥
unction solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => b - a); //내림차순 정리 [80 70 50 50]

    for (let i = 0, j = people.length - 1; i <= j; i++) {
        if (people[i] + people[j] > limit) { 
            answer += 1;
        } else {
            answer += 1;
            j -= 1;
        }
    }
    return answer;
}
 */