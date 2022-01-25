/* 배열.map((요소,인덱스,배열) => {return 요소});
map은 배열을 1대 1로 짝짓고 기존 객체를 수정하지 않고 새로운 배열을 만들어냅니다. */

const oneTwoThree = [1,2,3];
result = oneTwoThree.map((v) => {
    if (v % 2) { //2로 나누었을 때 나머지가 0이 아니면 true임
        return '홀수';
    }
    return '짝수';
});
result; //['홀수','짝수','홀수']