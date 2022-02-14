/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12977
문제 : nums에 있는 숫자중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 retrun
*/

function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {//for문을 3번 돌려서 배열 안의 서로 다른 숫자 골라 더하기
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }
    return answer;
}

function isPrime(sum) { //소수 판별 함수
    for (let i = 2; i < sum; i++)
        if (sum % i === 0) return false; //소수 아님
    return sum > 1;
}

// 소수는 1과 자기 자신으로만 나누어 떨어지는 정수를 말함. 그 특성을 활용해서 소수 판별 함수를 만든다.