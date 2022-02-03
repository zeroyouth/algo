/* 
출처 : https://programmers.co.kr/learn/courses/30/lessons/12916

문제 : 문자열s 에 p와 y의 개수를 비교해서 같으면 true, 다르면 false

조건 : 
- p,y가 하나도 없는 경우 항상 true 
- 대소문자 구별 x

*/

function solution(s){
    let sArr = s.toLowerCase().split('');
    if(!sArr.includes('p') && !sArr.includes('y')){
        return true;
    }
    let countP = 0;
    let countY = 0;
    for (let i = 0; i< sArr.length; i++){// 반복문으로 돌린다.
        if(sArr[i] === 'p') {
            countP++;
        }else if(sArr[i] === 'y') {
            countY++;
        }
    }

    if(countP === countY) {
        return true;
    }else{
        return false;
    }
}

/*해결순서 : 
- 문자열을 모두 소문자로 바꿔준다. 
- split를 사용해서 배열로 만들고 
- p,y 둘 다 없을 경우 true 리턴하는 조건 만든다.
- p,y 셀 count 만들고 반복문을 돌면서 p,y 카운트 올림
- 반복문 끝내고 카운터 2개가 같으면 true 아니면 false
 */

/*
멋진 한줄 풀이 🌟
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

//대문자로 바꿔주고 p로 조각낸 배열의 길이와 y로 조각낸 배열의 길이가 같으면 true반환 아니면 false반환
 */