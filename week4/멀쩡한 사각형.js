/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/62048
문제 : 가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이에서 대각선 방향으로 잘랐을 때 사용할 수 있는 정사각형 개수를 구하는 solution함수 완성하기
 */
function gcd(w,h){ //최대 공약수 구하기
    let rest = w % h;
    if (rest === 0) {
        return h;
    }
    return gcd(h,rest);//만약 0이 아니라면 w엔 h넣고 h엔 나머지를 넣어 재 호출한다.
}

function solution(w,h){ //정사각형 갯수 구하기
    let gcdValue = gcd(w,h);

    return w * h - (w + h - gcdValue); //공식 사용해서 전체-대각선사각형 = 답구하기
}
/* 공식 이용하기
🌟 대각선 제외 사각형 공식 => W + H - (W, H의 최대 공약수)
🌟 최대 공약수*를 구할 때는 '유클리드 호제법' 사용하기 
유클리드 호제법 : w와 h를 나눈 값의 나머지가 0이 나올때까지 반복하여 0이 나올 경우 h를 반환한다!(반복할 때 w는 h가 되고, h에는 나머지를 넣는다. )
🌠 코드로 보기 
// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {    // 처음 W와 H를 받습니다.

    // W와 H의 나머지를 구합니다.
    const mod = w % h;

    // 만약 나머지가 0일 경우 H를 반환합니다.
    if (mod === 0) {
        return h;
    }

    // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, mod);
}

*Greatest Common Divisor, GCD
*/