/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12982

문제 : 물품을 구매하는데 필요한 금액을 조사,
1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없다. 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

조건 :  d는 부서별로 신청한 금액, budget은 예산을 나타냄*/

function solution(d, budget) {
    var answer = 0, sum = 0;
    d.sort((a,b) => a - b);

    for(let i = 0; i < d.length; i++) {
        answer++; //일단 물품 수 올림.
        sum += d[i]

        if(sum > budget) //예산이 신청금액보다 작으면 물품수 - , 예외일땐 알아서 물품 + 됨
            answer--;
    }
    return answer;
}

/*풀이 과정은 
1. 일단 오름차순으로 d를 정렬해준다. 
2. 작은 예산부터 더하면 최대 지원이 가능할 것이다.
3. 예산보다 클때 종료함. */
