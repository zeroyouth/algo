/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/49993
문제 : 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 선행스킬이라고 한다.
선행 스킬 순서 skill과 유저들이 만든 스킬 트리를 담은 배열 skill_trees가 
매개변수로 주어질때, 가능한 스킬 트리 개수를 return하는 solution 함수 작성 */

function solution(skill, skill_trees) {
    let answer = 0;

    //skill_trees에 스킬 요소가 들어있는지 확인하기
    let container = skill_trees.map(a => {
        return a.split("").filter(b => skill.includes(b))
    });

    //가능한 skill_trees인지 확인하기
    for (let i = 0; i < container.length; i++) {
        let isValid = true;
        for (let j = 0; j < container[i].length; j++) {
            if (skill[j] !== container[i][j]) {
                isValid = false;
                break;
            }
        }
        if (isValid) answer++;
    }
    return answer;
}

/* Array.includes() : 배열이 특정요소를 포함하고 있는지 판별✏️

const array1 = [1, 2, 3];
console.log(array1.includes(2));  //true
*/