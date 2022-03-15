/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/81301

문제 : 일부 자릿수를 영단어로 바꾼 카드를 건네주면 원래 숫자를 찾는다.
s가 의미하는 원래 숫자를 return 

조건 :  문자열 s가 매개변수로 주어짐 ex."one4seveneight"
 */

function solution(s) {
    //인덱스        0      1       2      3         4       5      6      7        8     9
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven","eight","nine"];
    let answer = s; //문자열 s에 담기

    for(let i =0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);// 문자열 사이를 영어로 나누고 
        answer = arr.join(i);//나뉜 배열을 join()으로 배열 인덱스를 활용해 다시 숫자로 합친다.
    }
    return Number(answer);
}

/*내가 푼 답이 아님ㅠㅠ 풀이 실패 후, 천재의 간결한 답안 풀이🌟
'one4seveneight'의 경우 split을 통해 [ '', '4seveneight'] 이 생성된다.
이후 join(i)를 통하여 두 원소 사이에 '1' (i는 1인 상태기 때문에) 이 들어가게 되어 14seveneight 이 생성된다.

이후 for문을 계속 따라가다보면 
[ '14', 'eight'] // split 을 통해 생성.
147eight // join을 통해 생성.
[ '147', ''] // split을 통해 생성.
1478 // join을 통해 성성.

+ 추가적인 공부🌠-----------------------------------------------------------------------
-Array.split(분할의 기준, 제한 하는 분할 개수 ): 문자열을 분할하는 메서드이다.
-Array.join(배열의 각 요소를 구분할 문자열): 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
ex) cosnt arr ['바람', '비', '물'];
console.log(arr.join('-')); //바람-비-믈
*/