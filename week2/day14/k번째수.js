/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42748
문제 : array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을때, k번째에 있는 수 구하기
 */

function solution(array, commands) {
    const answer = [];
    let i = 0;
    let j = 0;
    let k = 0;
    for(let m = 0; m < commands.length; m++) {
        i = commands[m][0]
        j = commands[m][1]
        k = commands[m][2]

        let sliced = array.slice(i-1,j)
        let sorted = sliced.sort((a,b)=>a-b)

        answer.push(sorted[k-1])
    }
    return answer;
}


/*배열을 원하는 범위만큼 슬라이싱하고 정렬 할 수 있는지 확인하는 문제였음🌟
풀이 과정:
1. commands의 각 배열의 [0]부터 [1]번째까지 슬라이싱한다.
2. 슬라이싱한 배열 정렬 
3. k번째 값 배열 담기
4. commands 배열을 모두 순회하며 1~3을 반복한 후 3에서 담은 배열을 리턴
 */