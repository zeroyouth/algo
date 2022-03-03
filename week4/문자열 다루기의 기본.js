/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12918
문제 : 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성
*/

function solution(s) {
    if (!(s.length === 4 || s.length === 6)){ //길이가 4 or 6아니면 false
        return false
    }else {
        const box = s.split('')
        for(let i = 0; i <box.length; i++){
            if(isNaN(box[i])){ //숫자가 아니라면 false 리턴
                return false
            }
        }
    }
    return true
}

/*
- '==' 서로 다른 유형의 두 변수의 값만 비교 (값 -> true) | 자료형은 판단하지 않는다
- '===' 더 엄격하게 비교(값 & 자료형 -> true) | 권장사항
- isNaN() 함수는 어떤 값이 NaN인지 판별합니다. 숫자가 아니면 참
*/
