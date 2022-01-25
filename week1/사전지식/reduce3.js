// 초기값을 배열로 만들고, 배열에 값들을 push하면 map과 같은 역할임.

const oneTwoThree = [1,2,3];
result = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수'); //2로 나눌때 나머지가 0이 아니면 true
    return acc;
}, []);

console.log(result); // ['홀수', '짝수', '홀수']

