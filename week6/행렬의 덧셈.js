/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12950
문제 : 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 된다. 행렬 2개를 입력받아. 덧셈의 결과를 반환하는 함수를 완성하기 */

//arr1 = [[1,2],[2,3]]
//arr2 = [[3,4],[5,6]]

function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) { //[1,2][2,3]
        let temp = [];
        for (let j = 0; j < arr1[i].length; j++) {// arr1 안의 배열의 길이만큼 (2만큼)
            temp.push(arr1[i][j] + arr2[i][j]) // 1+3 , 2+4 그리고 2+5, 3+6
        }
        answer.push(temp)//[4,6],[7,9]
    }
    return answer;
}

/*map을 활용한 풀이💁
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}*/